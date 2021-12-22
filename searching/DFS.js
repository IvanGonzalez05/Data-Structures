// DFS stands for Depth First Search is a way to
// look for an element within a tree. In this method
// we look in the tree down as many levels as possible,
// until the target is found or we reach the last level

// has lower memory requirement than BFS
// usually goes left to right

// there are three ways we can implement a DFS:
// pre-order, in-order, post-order
// in-order: from min value to max value. good to return an ordered list of all nodes
// pre-order: from parent to children. is useful to recreate a tree
// post-order:from children to parent.

//       9
//    4     20
//  1  6  15  170

// in-order: [1,4,6,9,15,20,170]
// pre-order: [9,4,1,6,20,15,170]
// post-order: [1, 6, 4, 15, 170, 20, 9]

// BFS vs DFS:
// Time Complexity for BFS and DFS is O(n)

// BFS is good to find the shortest path, because we start
// at the root node and start looking for closer nodes. But requires more memory
// If we know that the element we are looking for is
// on the upper half of the tree, is good to use BFS

// DFS requires less memory. If we know the element we are looking for is on the lower half, is better than BFS
// It also can determine whether a path exists between 2 nodes
// But can get slow if the tree is really deep (has a lot of levels)

// BFS and DFS implementation can be found at file tree/BinarySearchTree
