class Compile {
  constructor (el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if (this.el) {
      // 如果这个元素能够获取到，我们将开始编译
      // 1.先把这些真实的DOM移入到内存中 fragment
      let fragment = this.node2fragment(this.el);
      // 2.编译 => 提取想要的元素节点 v-model 和文本节点 {{}}
      this.compile(fragment);
      // 3.把编译好的fragment再塞回到页面中去
      this.el.appendChild(fragment);
    }
  }

  /*专门写一些核心的方法*/

  /**
   * 遍历每个节点，判断节点类型，进行相应的编译
   * @param fragment
   */
  compile (fragment) {
    let childNodes = fragment.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {
        // 元素节点， 还需要继续深入的检查
        // 这里需要编译元素
        this.compileElement(node)
        this.compile(node);
      } else {
        // 文本节点
        // 这里需要编译文本
        this.compileText(node)
      }
    });
  }

  /**
   * 编译节点
   * @param node
   */
  compileElement (node) {
    // 带v-model v-text v-
    let attrs = node.attributes;
    Array.from(attrs).forEach(attr => {
      // 判断属性名字是不是包含v-
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        // 取到对应的值放到节点中
        let expr = attr.value;
        let [, type] = attrName.split('-')
        // node this.vm.$data expr v-model v-text....
        CompileUtil[type](node, this.vm, expr)
      }
    })
  }

  /**
   * 编译文本
   * @param node
   */
  compileText (node) {
    // 带{{}}
    // 取文本
    let expr = node.textContent;
    let reg = /\{\{([^}]+)\}\}/g;
    if (reg.test(expr)) {
      // node this.vm.$data text
      CompileUtil['text'](node, this.vm, expr)
    }
  }
  /**
   * 将DOM结构放到内存中
   * @param el
   * @returns {DocumentFragment}
   */
  node2fragment (el) {
    // 文档碎片 内存中的dom节点
    let fragment = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild);
    }
    return fragment;
  }


  /*专门写一些辅助的方法*/
  /**
   * 判断是否是节点
   * @param node
   * @returns {boolean}
   */
  isElementNode (node) {
    return node.nodeType === 1;
  }

  /**
   * 判断该字符串是否包含‘v-’
   * @param name
   * @returns {boolean}
   */
  isDirective (name) {
    return name.includes('v-');
  }
}

/**
 * 编译工具方法
 */
CompileUtil = {
  // 获取实例上对应的数据
  getVal (vm, expr) {
    expr = expr.split('.'); // [s,c,d,d]
    return expr.reduce((prev, next) => {
      return prev[next];
    }, vm.$data);
  },
  // 获取编译文本后的结果
  getTextVal (vm, expr) {
    return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      return this.getVal(vm, arguments[1]);
    })
  },
  // 设置节点上的数据
  setVal (vm, expr, value) {
    expr = expr.split('.');
    // 收敛
    return expr.reduce((prev, next, currentIndex) => {
      if (currentIndex === expr.length - 1) {
        return prev[next] = value;
      }
      return prev[next];
    }, vm.$data)
  },
  // 文本处理
  text (node, vm, expr) {
    let updateFn = this.updater['textUpdater'];
    let value = this.getTextVal(vm, expr)
    expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
      new Watcher(vm, arguments[1], (newValue) => {
        updateFn && updateFn(node, this.getTextVal(vm, expr))
      })
    });

    updateFn && updateFn(node, this.getTextVal(vm, expr))
  },
  // 输入框处理
  model (node, vm, expr) {
    let updateFn = this.updater['modelUpdater'];
    // 这里应该加一个监控 数据变化了 应该调用这个watch的callback
    new Watcher(vm, expr, (newValue) => {
      // 当值变化后会调用cb 将新的值传递过来
      updateFn && updateFn(node, this.getVal(vm, expr))
    });
    node.addEventListener('input', (e) => {
      let newValue = e.target.value;
      this.setVal(vm, expr, newValue);
    });
    updateFn && updateFn(node, this.getVal(vm, expr))
  },

  updater: {
    // 文本更新
    textUpdater (node, value) {
      node.textContent = value
    },

    // 输入框更新
    modelUpdater (node, value) {
      node.value = value;
    }
  }
}






















