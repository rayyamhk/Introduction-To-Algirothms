// Chapter 6.5 Priority Queue

const { maxHeapify } = require('./1_Heap-sort');

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.heap.heapSize = 0;
  }

  // O(logN)
  insert(key) {
    this.heap[this.heap.heapSize] = Number.NEGATIVE_INFINITY;
    this.increaseKey(this.heap.heapSize, key);
    this.heap.heapSize++;
  }

  // O(logN)
  delete(i) {
    if (i >= this.heap.heapSize) {
      return;
    }
    this.increaseKey(i, Number.POSITIVE_INFINITY);
    this.heap[0] = this.heap[this.heap.heapSize - 1];
    this.heap.heapSize--;
    maxHeapify(this.heap, 0);
  }

  // O(1)
  max() {
    if (this.heap.heapSize < 1) {
      return null;
    }
    return this.heap[0];
  }

  // O(logN)
  popMax() {
    if (this.heapSize < 1) {
      return null;
    }
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.heapSize - 1];
    this.heap.heapSize--;
    maxHeapify(this.heap, 0);
    return max;
  }

  // O(logN)
  increaseKey(i, key) {
    if (key < this.heap[i]) {
      return;
    }
    let node = i;
    let parent = Math.floor((node - 1) / 2);
    this.heap[i] = key;
    while (node > 0 && this.heap[node] > this.heap[parent]) {
      swap(this.heap, node, parent);
      node = parent;
      parent = Math.floor((node - 1) / 2);
    }
  }
  
  print() {
    console.log(this.heap.slice(0, this.heap.heapSize));
  }
}

module.exports = PriorityQueue;

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}