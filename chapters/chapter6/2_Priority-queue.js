// Chapter 6.5 Priority Queue

const { maxHeapify } = require('./1_Heap-sort');

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.heap.size = 0;
  }

  // O(logN)
  insert(key) {
    let node = this.heap.size;
    let parent = Math.floor((node - 1) / 2);
    this.heap[node] = key;
    while (node > 0 && this.heap[parent] < this.heap[node]) {
      swap(this.heap, node, parent);
      node = parent;
      parent = Math.floor((node - 1) / 2);
    }
    this.heap.size++;
  }

  // O(1)
  max() {
    if (this.heap.size < 1) {
      return null;
    }
    return this.heap[0];
  }

  // O(logN)
  popMax() {
    if (this.size < 1) {
      return null;
    }
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.size - 1];
    this.heap.size--;
    maxHeapify(this.heap, 0);
    return max;
  }
}

module.exports = PriorityQueue;

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}