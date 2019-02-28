// 定义节点
class Node {
  constructor (data) {
    this.root = this;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// 创建二叉搜索树（BST）
class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  // 插入节点
  insert (data) {
    const newNode = new Node(data);
    const insertNode = (node, newNode) => {
      if (newNode.data < node.data) {
        if(node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if(node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    };

    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
  // 前序遍历
  preOrder () {
    let backs = [];
    const preOrderNode = (node, callback) => {
      if (node !== null) {
        // console.log('' + node.data)
        console.log(`节点数据: ${node.data}`)
        backs.push(callback(node.data));
        preOrderNode(node.left, callback);
        preOrderNode(node.right, callback);
      }
    };
    preOrderNode(this.root, callback);
    function callback(v) {
      return v;
    }
    return backs;
  }
}

const tree = new BinarySearchTree();
tree.insert(90)
tree.insert(2)
tree.insert(5)
tree.insert(902)
tree.insert(94)
tree.insert(6)

console.log(tree);
console.log(tree.preOrder());
