// BFS stands for Breadth First Search
// Is a method to traverse a tree checking
// each node in each level from left to rigth
// until we find the node we are looking for
// or the tree ends

// uses additional memory because is necessary to track
// the children nodes, of all the nodes on a given level

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
