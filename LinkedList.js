// singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let itemRemoved = this.head;
    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return itemRemoved;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return newNode;
  }
}

let list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("You");

// console.log(list);

// console.log(list.pop());
// console.log(list);
// list.shift();
// console.log(list.shift());
// console.log(list);

console.log(list.unshift("HI"));
console.log(list);
console.log(list.unshift("Hello"));
console.log(list);
console.log(list.unshift("Naresh"));
console.log(list);
