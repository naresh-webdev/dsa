class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    //* bubble up
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);
    while (
      parent >= 0 &&
      this.values[parent].priority > this.values[child].priority
    ) {
      let temp = this.values[parent];
      this.values[parent] = this.values[child];
      this.values[child] = temp;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
    return this.values;
  }

  dequeue() {
    //TODO EDGE CASE - IMPORTANT !!!
    const removed = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;

    //* sink down
    let idx = 0;
    let element = this.values[0];
    console.log("element is ", element);
    let left, right;
    while (true) {
      left = idx * 2 + 1;
      right = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (left < this.values.length) {
        leftChild = this.values[left];
        if (leftChild.priority < element.priority) swap = left;
      }
      if (right < this.values.length) {
        rightChild = this.values[right];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = right;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    return removed;
  }
}

const er = new PriorityQueue();
er.enqueue("common cold", 5);
er.enqueue("gunshot", 1);
er.enqueue("high fever", 3);
er.enqueue("broken arm", 2);
er.enqueue("gass in foot", 2);
