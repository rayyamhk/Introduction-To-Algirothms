// Chapter 10.1 Queue
// First-in, first-out, FIFO.

class Queue {
  constructor(size = 10) {
    this.size = size;
    this.items = Array(size + 1);
    this.head = 0; // point to the element to be dequeued.
    this.tail = 0; // point to the entry that an element will be enqueued.
  }

  isEmpty() {
    return this.head === this.tail;
  }

  isFull() {
    return (this.tail + 1) % (this.size + 1) === this.head;
  }

  enqueue(x) {
    if (this.isFull()) {
      throw new Error('Queue overflows.');
    }
    this.items[this.tail] = x;
    this.tail = (this.tail + 1) % (this.size + 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue underflows.');
    }
    const item = this.items[this.head];
    this.head = (this.head + 1) % (this.size + 1);
    return item;
  }
}

module.exports = {Queue};