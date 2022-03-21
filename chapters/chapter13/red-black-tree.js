class RedBlackTree {
  constructor() {
    this.root = null;
    this.nil = new Node(null, 0);
    this.nil.p = this.nil;
    this.nil.left = this.nil;
    this.nil.right = this.nil;
  }

  // we assume x.right is not null
  leftRotate(x) {
    const y = x.right;

    // modify 1st branch
    x.right = y.left;
    if (y.left !== this.nil) {
      y.left.p = x;
    }

    // modify 2nd branch
    y.p = x.p;
    if (x.p === this.nil) {
      this.root = y;
    } else if (x.p.left === x) {
      x.p.left = y;
    } else {
      x.p.right = y;
    }

    // modify 3rd branch
    y.left = x;
    x.p = y;
  }

  // we assume x.left is not null
  rightRotate(x) {
    const y = x.left;

    // modify 1st branch
    x.left = y.right;
    if (y.right !== this.nil) {
      y.right.p = x;
    }

    // modify 2nd branch
    y.p = x.p;
    if (x.p === this.nil) {
      this.root = y;
    } else if (x.p.left === x) {
      x.p.left = y;
    } else {
      x.p.right = y;
    }

    // modify 3rd branch
    y.right = x;
    x.p = y;
  }

  insert(z) {
    let y = this.nil;
    let x = this.root;
    while (x !== this.nil) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    z.p = y;
    if (y === this.nil) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
    z.left = this.nil;
    z.right = this.nil;
    z.color = 1; // red
    this._insertFixUp(z);
  }

  _insertFixUp(z) {
    while (z.p.color === 1) { // red
      if (z.p === z.p.p.left) {
        const y = z.p.p.right;
        if (y.color === 1) {
          z.p.color = 0; // black
          y.color = 0;
          z.p.p.color = 1;
          z = z.p.p;
        } else {
          if (z === z.p.right) {
            this.leftRotate(z.p);
          }
          z.p.color = 0;
          z.p.p.color = 1;
          this.rightRotate(z.p.p);
        }
      } else {
        const y = z.p.p.left;
        if (y.color === 1) {
          z.p.color = 0;
          y.color = 0;
          z.p.p.color = 1;
          z = z.p.p;
        } else {
          if (z === z.p.left) {
            this.rightRotate(z.p);
          }
          z.p.color = 0;
          z.p.p.color = 1;
          this.leftRotate(z.p.p);
        }
      }
    }
    this.root.color = 0;
  }
}

class Node {
  constructor(key, color) {
    this.key = key;
    this.p = null;
    this.left = null;
    this.right = null;
    this.color = color; // 0 represents black, 1 represents red
  }
}