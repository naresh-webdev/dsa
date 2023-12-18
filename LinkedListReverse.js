class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  print() {
    let arr = [];
    let node = this.head;
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
  }
  reverse() {
    // step-1 : swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    // step-2 : figure the rest yourself ;)
    let prev = null;
    let next;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    this.print();
  }
}

let l1 = new LinkedList();
