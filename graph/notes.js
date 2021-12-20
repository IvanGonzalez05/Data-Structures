// there are directed graphs and undirected graphs.
// directed means a node can only go to the specified path.
// undirected can go through any edge in double direction

// also exists weighted and unweighted graphs
// weighted graphs has "values" on the edges

// also exists cyclic and acyclic.

// -----------------------------

// lets say we have the following graph
//           (2)---------(0)
//          /  \
//         /    \
//        (1)---(3)

// Edge List
// simply shows the connections between nodes
// 0 is connected to 2
// 2 is connected to 3 and 1 (and 0, but the connection was already in the array)
// and 1 is connected to 3
const EdgeGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// adjacent list
// the index is the node and the value its the neighbours
// index 0 (node 0) is connected to 2
// index 1 (node 1) is connected to 2 and 3
// index 2 (node 2) is connected to 0, 1 and 3
// and index 3 is connected to 1 and 2
const adjacentGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
// 0 means does not have a connection
// 1 means it does have a connection

// index 0 (node 0) has connection with 2 (index 2 represents node 2)
// index 2 has connection with 0, 1, and 3 etc...
// each index represent each node
const matrixGraph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// when it comes to performance:
// are really useful when data needs to relate with each other
// but scaling them might be hard
