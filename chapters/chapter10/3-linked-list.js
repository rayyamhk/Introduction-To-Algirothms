const process = require('process');

// Chapter 10.2 Linked lists

// Doubly linked list without a sentinel
class LinkedList {
  constructor() {
    this.head = null;
  }

  search(k) {
    let node = this.head;
    while (node !== null && node.key !== k) {
      node = node.next;
    }
    return node;
  }

  insert(x) {
    x.next = this.head;
    x.prev = null;
    if (this.head !== null) {
      this.head.prev = x;
    }
    this.head = x;
  }

  delete(x) {
    if (x.prev !== null) {
      x.prev.next = x.next;
    } else {
      this.head = x.next;
    }
    if (x.next !== null) {
      x.next.prev = x.prev;
    }
  }

  display() {
    let node = this.head;
    while (node !== null) {
      process.stdout.write(`${node.key}`);
      node = node.next;
      if (node !== null) {
        process.stdout.write(' <--> ');
      }
    }
    process.stdout.write('\n');
  }
}

// Circular, doubly linked list with a sentinel
class LinkedListWithSentinel {
  constructor() {
    this.nil = new Node(null);
    this.nil.next = this.nil;
    this.nil.prev = this.nil;
  }

  search(k) {
    // let node = this.nil.next;
    // while (node !== this.nil && node.key !== k) {
    //   node = node.next;
    // }
    // return node;
    this.nil.key = k;
    let node = this.nil.next;
    while (node.key !== k) {
      node = node.next;
    }
    this.nil.key = null;
    return node;
  }

  insert(x) {
    this.nil.next.prev = x;
    x.next = this.nil.next;
    x.prev = this.nil;
    this.nil.next = x;
  }

  delete(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
  }

  display() {
    let node = this.nil;
    process.stdout.write('nil-->');
    while (node.next !== this.nil) {
      node = node.next;
      process.stdout.write(`${node.key}-->`);
    }
    process.stdout.write('nil\n');
  }
}

class Node {
  constructor(key) {
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

module.exports = {LinkedList, LinkedListWithSentinel, Node}