# Binary Search Trees
The time complexity of `search`, `minimum`, `maximum`, `predecessor`, `successor`, `insert`, and `delete` are `O(h)`, where `h = O(logN)` in most cases, but can be `O(N)` in the worst case.

## Binary-search-tree property
Let x be a node in the binary search tree. If y is a node in the left subtree of x, then `y.key <= x.key`. If y is a node in the right subtree of x, then `y.key >= x.key`.

## Tree Traversals
1. Inorder traversal: x.left -> x -> x.right
2. Preorder traversal: x -> x.left -> x.right
3. Postorder traversal: x.left -> x.right -> x

## Set operations

### Search
If the node is null or if the node key is k, return the node.
Otherwise, search in the left subtree if node key <= k, and search in the right subtree if node key > k.

### Minimum
Return the leftmost node.

### Maximum
Return the rightmost node.

### Successor
If the right child is not null, return the minimum of the right subtree. Otherwise, return the lowest ancestor of x whose left child is also an ancestor of x.

### Predecessor
If the left child is not null, return the maximum of the left subtree. Otherwise, return the lowest ancestor of x whose right child is also an ancestor of x.

### Insert
Keep track the current node `x` and its parent `y`. Starting from the root node, iteratively traverse to its child based on the key comparison until reaching the null (`x` is null, thus `y` is a leaf node). Add the new node to the correct child of `y`.

### Delete
If the node is a leaf node, remove it from its parent directly.
If the node has one child, replace the node by its child.
If the node has two children, remove its successor from the tree, and replace the node by its successor.