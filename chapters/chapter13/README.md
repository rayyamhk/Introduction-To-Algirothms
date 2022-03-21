# Red-Black Trees
Red-black trees is a balanced binary search tree so that the worst case time complexity of set operations are guaranteed to be `O(logN)`.

## Properties
1. Every node is either red or black.
2. The root must be black.
3. Every leaf node is null and black.
4. The children of a red node must be black.
5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.

**Remarks:**
1. Use 1 bit to store the color of a node.
2. All null nodes, including the parent of the root node, can be represented by the same sentinel node.
3. We define `bh(x)` as the black-height (bh) of the node x, which is the number of black nodes from x to its descendant leaf, excluding `x` itself.
4. Similarly, we define the black-height of a R-B tree as the bh of its root.
5. Let h be the bh of the R-B tree. Property 3 implies that the shortest path must be all black, which has length `h`, and the longest path must be alternating red and black, which has length `2h`.
6. Remark 5 implies that for a R-B tree with n internal nodes, the height must be at most `2log(N + 1)`.

## AVL Tree v.s. Red-Black Tree
1. Both are balanced binary search trees.
2. AVL trees are strictly balanced and hence provide faster lookups.
3. Red-black trees provide faster insertion and deletion as fewer rotations required due to the relatively relaxed balancing requirements.
4. Red-black trees only require 1 bit per node to store the color, while AVL trees require 1 integer per node to store the balance factors.

## Insertion
Insert the node z into the tree T as if it were an ordinary BST, and then we color z red. To guarantee that the RB properties are preserved, we call an auxiliary procedure `RB-Insert-FixUp` to perform rotations and recolor nodes iteratively up to the root.

During ordinary BST insertion, only property 2 and 4 will be violated. If 2 is violated, then `z` is the root of the tree. If 4 is violated, then both `z` and `z.p` are red.

### z's uncle is red
Color z's parent and z's uncle black and done.

### z's uncle is black and z is a left child
Color z's parent black and color z's grandparent red, then apply `right rotation` to z's grandparent.

### z's uncle is black and z is a right child
Apply `left rotation` to z's parent to convert the tree to the above pattern.

## Deletion
Delete the node z from the tree T as if it were an ordinary BST, which always end up deleting a node which is either an leaf or has only one child. If the node is an internal node, we replace it by its successor and delete its successor recursively. The property 5 may be violated after ordinary delete.

Let v be the node to be deleted, and u be the child that replaces v.

### Either v or u is red
Color the replaced child as black, black-height remains unchanged.

### Both v and u are black
Deletion results in reducing the black-height of the subtree. Performs rotations iteratively up to the root.