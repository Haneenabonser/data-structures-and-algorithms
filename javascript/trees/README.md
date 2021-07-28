## Trees
Tree is a non-linear data structure that uses connected nodes to represen hierarch data and have a root node that have 0 or more children up to 2 children and that applies to every child node.

## Challenge
Breadth-first Traversal.

## Approach & Efficiency
Used recursion to traverse through the tree with time complexity of n, Used Iterative approach to add to binary search tree with O(n), Used Iterative to check if element exists with O(n).

## API
- Class Node
- Class BinaryTree
    - Method inOrder (Takes the root) : Recursion O(n) traverses using the InOrder method.
    - Method preOrder (Takes the root) : Recursion O(n) traverses using the PreOrder method.
    - Method postOrder (Takes the root) : Recursion O(n) traverses using the PostOrder method.
- Class BinarySearchTree
    - Method add(data) : Iterativly adds an element to the right position O(n).
    - Method contains(key) : Iterativly searches an element exists to the right position O(n).


## WhiteBoard
![WhiteBoard](./code17.png)