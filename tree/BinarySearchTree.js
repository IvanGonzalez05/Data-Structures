// BST --> Binary Search Tree

// Big O of a Balanced BST
// lookup O(log N)
// insert O(log N)
// delete O(log N)

// Big O of an Unbalanced BST
// lookup O(n)
// insert O(n)
// delete O(n)

// its important to have a balanced BST to keep a perfomance of O(log N). There are algorithms that helps us to solve this. AVL tree and Red/Black tree balanced themselfs (auto balance)

// All child nodes to the right of the root node, must be greater than the value of the current node.
// All child to the left of the root node, must be less than the value of the current node
// A node can only have up to two children

// Advantages: O(log N) is better than O(n), ordered, flexible size
// Disadvantages: No O(1) operations

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; // answers
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }

    return list;
  }

  // breadthFirstSearchR: recursive BFS implementation
  breadthFirstSearchR(queue, list) {
    if (!queue.length) return list;

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);

    if (currentNode.right) queue.push(currentNode.right);

    return this.breadthFirstSearchR(queue, list);
  }

  depthFirstSearchInOrder = () => this.traverseInOrder(this.root, []);

  depthFirstSearchPostOrder = () => this.traversePostOrder(this.root, []);

  depthFirstSearchPreOrder = () => this.traversePreOrder(this.root, []);

  traverseInOrder(node, list) {
    if (node.left) this.traverseInOrder(node.left, list);
    list.push(node.value);

    if (node.right) this.traverseInOrder(node.right, list);

    return list;
  }

  traversePreOrder(node, list) {
    list.push(node.value);

    if (node.left) this.traversePreOrder(node.left, list);

    if (node.right) this.traversePreOrder(node.right, list);

    return list;
  }

  traversePostOrder(node, list) {
    if (node.left) this.traversePostOrder(node.left, list);

    if (node.right) this.traversePostOrder(node.right, list);

    list.push(node.value);

    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(9));
// console.log(JSON.stringify(traverse(tree.root)));

// prints a list with the elements in the order they are visited (left to right)
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root], []));

// prints a list with the elements after performing
// the 3 differents DFS
console.log(tree.depthFirstSearchInOrder());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
