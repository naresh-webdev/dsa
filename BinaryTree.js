class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let curNode = this.root;
    while (true) {
      // checks for the same value, just ignore😉
      if (curNode.value == val) {
        return undefined;
      }
      if (curNode.value < node.value) {
        if (!curNode.right) {
          curNode.right = node;
          break;
        } else {
          curNode = curNode.right;
        }
      } else {
        if (!curNode.left) {
          curNode.left = node;
          break;
        } else {
          curNode = curNode.left;
        }
      }
    }
    return this;
  }

  find(val) {
    if (this.root === null) return false;
    let curNode = this.root;
    while (true) {
      if (curNode.value === val) {
        return curNode;
      } else if (curNode.value > val) {
        if (curNode.left === null) return false;
        curNode = curNode.left;
      } else if (curNode.value < val) {
        if (curNode.right === null) return false;
        curNode = curNode.right;
      }
    }
  }

  // tree traversal - Breadth first search
  BFS() {
    let queue = [];
    let visited = [];
    let node;
    queue.push(this.root);
    while (queue.length !== 0) {
      node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }

  DFSpreorder() {
    let data = [];
    let currentNode = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left !== null) traverse(node.left, data);
      if (node.right !== null) traverse(node.right, data);
    }
    traverse(currentNode);
    return data;
  }

  DFSpostorder() {
    let data = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left !== null) traverse(node.left, data);
      if (node.right !== null) traverse(node.right, data);
      data.push(node.value);
    }
    traverse(currentNode);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSpreorder());
console.log(tree.DFSpostorder());
