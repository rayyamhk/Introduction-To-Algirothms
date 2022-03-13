// Chapter 10.1 Stack
// Last-in, first-out, LIFO.

class Stack {
  constructor(size = 10) {
    this.size = size;
    this.items = Array(size);
    this.top = -1;
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.size - 1;
  }

  push(x) {
    if (this.isFull()) {
      throw new Error('Stack overflows.');
    }
    this.top += 1;
    this.items[this.top] = x;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflows.');
    }
    this.top -= 1;
    return this.items[this.top + 1];
  }
}

module.exports = {Stack};