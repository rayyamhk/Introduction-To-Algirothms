// Chapter 10.4 Rooted trees

class Tree {
  constructor() {
    this.root = null;
  }

  insert(x) {}

  delete(x) {}

  search(k) {}
}

// Node for binary trees
class BinaryNode {
  constructor(key) {
    this.key = key;
    this.p = null;
    this.left = null;
    this.right = null;
  }
}

// Node for unbounded branching trees
class UnboundedNode {
  // if this.p is null ==> root
  // if leftChild is null ==> no child
  // if rightSibling is null => rightmost node
  constructor(key) {
    this.key = key;
    this.p = null;
    this.leftChild = null;
    this.rightSibling = null;
  }
} 