class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);
    while (this.values[parent] && this.values[parent] < this.values[child]) {
      let temp = this.values[parent];
      this.values[parent] = this.values[child];
      this.values[child] = temp;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
    return this.values;
  }

  remove() {
    //TODO EDGE CASE - IMPORTANT !!!
    const removed = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;
    let idx = 0;
    let element = this.values[0];
    let left, right;
    while (true) {
      left = idx * 2 + 1;
      right = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (left < this.values.length) {
        leftChild = this.values[left];
        if (leftChild > element) swap = left;
      }
      if (right < this.values.length) {
        rightChild = this.values[right];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          console.log("hi");
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

const heap = new BinaryHeap();

heap.insert(100);
heap.insert(55);
heap.insert(45);
heap.insert(50);
console.log(heap.values);
