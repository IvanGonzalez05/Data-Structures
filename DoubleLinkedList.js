// a Double Linked list works very similar to a Single Linked List (SLL) (LinkedList.js)
// But a Double Linked List (DLL) also points to the node before the current one
// this allows us to traverse backwards (from tail to head)
// a DLL lookup might be O(n / 2) which is more efficient. But it usually represented as O(n) anyways
// a DLL also needs more space than SLL, because it has an aditional pointer in each node

// Big O Notation
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
//  delete O(n)

// When to use SLL vs DLL?
// SSL is easier to implement, require less memory. Is a little bit faster at deleting and inserting
// the downside is that cannot be iterated in reverse
// is appropiate to use a SLL when we want faster insertion and deletion and not so much space

// DLL can be iterated in reverse. Its easier to delete a previous node. But, its more complex and requires more memory

// this time, since its a Double Linked List
// each node needs a reference to the previous node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // add value to the end (tail)
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // add value to the start (head)
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);

    const node = new Node(value);
    let leaderNode = this.traverseToIndex(index - 1);
    const follower = leaderNode.next;

    leaderNode.next = node;
    node.next = follower;
    node.prev = leaderNode;
    follower.prev = node;

    this.length++;

    return this;
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const nodeToDelete = leaderNode.next;
    const follower = nodeToDelete.next;

    leaderNode.next = follower;
    follower.prev = leaderNode;

    this.length--;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
    return array;
  }
}

let myDoubleLinkedList = new DoubleLinkedList(10);

myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);

myDoubleLinkedList.prepend(1);

myDoubleLinkedList.insert(2, 99);

myDoubleLinkedList.remove(1);
myDoubleLinkedList.printList();
