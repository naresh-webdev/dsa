class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let curTail = this.tail;
    if (length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = curTail.prev;
      this.tail.next = null;
      curTail.prev = null;
    }
    this.length--;
    return curTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter;
    let curNode;
    if (index <= this.length / 2) {
      counter = 0;
      curNode = this.head;
      while (counter !== index) {
        curNode = curNode.next;
        counter++;
      }
    } else {
      curNode = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        curNode = curNode.prev;
        counter--;
      }
    }
    return curNode;
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    else if (pos === 0) {
      this.unshift(val);
      return true;
    } else if (pos === this.length) {
      this.push(val);
      return true;
    } else {
      let node = this.get(pos).prev;
      let newNode = new Node(val);
      newNode.next = node.next;
      newNode.prev = node;
      node.next = newNode;
      newNode.next.prev = newNode;
      this.length++;
      return true;
    }
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos === 0) return this.shift();
    if (pos === this.length - 1) return this.pop();
    let node = this.get(pos);
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
