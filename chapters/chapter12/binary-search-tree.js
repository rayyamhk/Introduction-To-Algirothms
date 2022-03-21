class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  inorderTreeWalk() {
    _inorderTreeWalk(this.root);
  }

  preorderTreeWalk() {
    _preorderTreeWalk(this.root);
  }

  postorderTreeWalk() {
    _postorderTreeWalk(this.root);
  }

  search(k) {
    return _search(this.root, k);
    // return _searchIterative(this.root, k);
  }

  minimum() {
    return _minimum(this.root);
  }

  maximum() {
    return _maximum(this.root);
  }

  successor(x) {
    if (x.right !== null) {
      return _minimum(x.right);
    }
    let y = x.p;
    while (y !== null && y.right === x) {
      x = y;
      y = y.p;
    }
    return y;
  }

  predecessor(x) {
    if (x.left !== null) {
      return _maximum(x.left);
    }
    let y = x.p;
    while (y !== null && y.left === x) {
      x = y;
      y = y.p;
    }
    return y;
  }

  insert(z) {
    let x = this.root; // current node
    let y = null; // parent of the current node

    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    z.p = y;
    if (y === null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
  }

  /**
   * If z has no child, simply remove it.
   * If z has only one child, elevate its child to replace z.
   * If z has two childrens, replace z by its successor.
   */
  delete(z) {
    if (z.left === null) {
      this._transplant(z, z.right);
    } else if (z.right === null) {
      this._transplant(z, z.left);
    } else {
      const y = _minimum(z.right);
      if (y.p !== z) {
        this._transplant(y, y.right);
        y.right = z.right;
        y.right.p = y;
      }
      this._transplant(z, y);
      y.left = z.left;
      y.left.p = y;
    }
  }

  _transplant(u, v) {
    if (u.p === null) {
      this.root = v;
    } else if (u === u.p.left) {
      u.p.left = v;
    } else {
      u.p.right = v;
    }
    if (v !== null) {
      v.p = u.p;
    }
  }
}

class Node {
  constructor(k) {
    this.key = k;
    this.p = null;
    this.left = null;
    this.right = null;
  }
}

module.exports = {BinarySearchTree, Node};

function _inorderTreeWalk(x) {
  if (x !== null) {
    _inorderTreeWalk(x.left);
    console.log(x.key);
    _inorderTreeWalk(x.right);
  }
}

function _postorderTreeWalk(x) {
  if (x !== null) {
    _postorderTreeWalk(x.left);
    _postorderTreeWalk(x.right);
    console.log(x.key);
  }
}

function _preorderTreeWalk(x) {
  if (x !== null) {
    console.log(x.key);
    _preorderTreeWalk(x.left);
    _preorderTreeWalk(x.right);
  }
}

function _search(x, k) {
  if (x === null || x.key === k) {
    return x;
  }
  if (k < x.key) {
    return _search(x.left, k);
  } else {
    return _search(x.right, k);
  }
}

function _searchIterative(x, k) {
  while (x !== null && x.key !== k) {
    if (k < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
  }
  return x;
}

function _minimum(x) {
  while (x.left !== null) {
    x = x.left;
  }
  return x;
}

function _maximum(x) {
  while (x.right !== null) {
    x = x.right;
  }
  return x;
}