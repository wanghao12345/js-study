class Observer {
  constructor (data) {
    this.observe(data)
  }
  observe (data) {
    // 要对这个data数据将原有的属性改成set和get的形式
    if (!data || typeof data !== 'object') {
      return;
    }
    // 要将数据一一劫持 先获取取到data的key和value
    Object.keys(data).forEach(key => {
      // 劫持
      this.defineReactive(data, key, data[key]);
      this.observe(data[key]); // 深度递归劫持
    })
  }
  // 定义响应式
  defineReactive (obj, key, value) {
    let that = this;
    // 每个变化的数据，都会对应一个数组，这个数组是存放所有更新的操作
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () { // 当取值时调用的方法
        // todo.....
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set (newValue) {
        if (newValue !== value) {
          // todo....
          that.observe(newValue);
          value = newValue;
          dep.notify(); // 通知所有人，数据更新了
        }
      }

    })
  }
}


class Dep {
  constructor () {
    // 订阅的数组
    this.subs = [];
  }
  // 添加watcher到订阅数组中
  addSub (watcher) {
    this.subs.push(watcher);
  }
  notify () {
    this.subs.forEach(watcher => watcher.update());
  }
}





















