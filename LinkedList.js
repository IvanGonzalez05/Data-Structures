// Big O of Linked Lists
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// A Linked Lists is a list of nodes
// each node has two elements: the value
// and a pointer to the next node

// there are two types of Linked List:
// Single Linked List (SLL): each node has a reference to the next node
// DoubleLinkedList (DLL): each node has a reference to the previous node and the next node

// the first element is called head. The last is called tail.
// Linked Lists are null terminated. This means, that when we reach null, the list has ended

// Why to use a Linked List?
// Well they are really really fast at inserting data and there is some sort of order
// HashTable are faster to get values, but we dont have ordered items.
// arrays are also faster to get items, but inserting and deleting data might be slower than a Linked List

// NOTE: remember, Big O measures the worst case sceneario. Linked Lists has O(n) at inserting and deleting data because it might be at the end of the list. But in a lot of cases it would be better than an array

// Js does not have a Linked List. So we have to create it

// This class represents the nodes that will form the Linked List
// since this is a Single Linked List, we just have a value and a reference to the next node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // this head, can be of class Node, but whatever
    this.head = {
      value,
      next: null,
    };

    // at the start of the Linked List, the head and the tail are the same
    this.tail = this.head;
    this.length = 1;
  }

  // add value to the end (tail)
  append(value) {
    // we create a new node
    const newNode = new Node(value);

    // the current tail will now have a reference to the next node
    this.tail.next = newNode;
    // the current tail now will be the new node.
    // the previous tail is not lost, because the previous element still has a reference to its space in memory
    this.tail = newNode;
    this.length++;

    return this;
  }

  // add value to the start (head)
  prepend(value) {
    // creating a new node
    const newNode = new Node(value);

    // the reference to the next node will be the current head
    newNode.next = this.head;

    // now the head will be the new node
    this.head = newNode;
    this.length++;

    return this;
  }

  // method to move through the Linked List
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // method to insert an element
  insert(index, value) {
    // if the index is greater than the current length
    // add the value to the end of the list (using the append method) and return
    if (index >= this.length) return this.append(value);

    // create a node
    const node = new Node(value);

    // getting the node at index - 1 (the previous one)
    let leaderNode = this.traverseToIndex(index - 1);

    // the previously created node will have a reference
    // to the leaderNode following element
    node.next = leaderNode.next;

    // and the new node will be referenced by the leaderNode
    leaderNode.next = node;

    // since we add a node, gotta increment the length
    this.length++;

    return this;
  }

  remove(index) {
    // get the leaderNode (index - 1) (the previous node)
    const leaderNode = this.traverseToIndex(index - 1);

    // the node to delete is the next one of the leader
    const nodeToDelete = leaderNode.next;
    // and now the node that follows the leaderNode will be
    // the node that follows the nodeToDelete
    leaderNode.next = nodeToDelete.next;

    // since no one is referencing the nodeToDelete object, the garbage collector will erase it from memory

    // since an element was deleted, we decreased the length by one
    this.length--;
    return this;
  }

  // method to reverse the linked list
  reverse() {
    // if the head does not have a next value, return the head
    // since its the only item in the list
    if (!this.head.next) return this;

    // the tail will now be the head
    this.tail = this.head;

    // getting the first and second element in the list
    let first = this.head;
    let second = first.next;

    // while second exists
    while (second) {
      // stores the next value of second in a temporal variable
      const temp = second.next;
      // the next node of second will be the first
      second.next = first;
      // the first will be the second
      first = second;
      // the second now will be the temp
      second = temp;
    }

    // the next value of the head is now null (since its the end of the list)
    this.head.next = null;
    // and the head will be first (the last value inside the while)
    this.head = first;

    // printing the list
    this.printList();
    return this;
  }

  // method to print all the values in the linked list
  printList() {
    const array = [];

    // starting from the head
    let currentNode = this.head;

    // while current node is different from null,
    // push the value to an array and go to next node
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
    return array;
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);
myLinkedList.printList();

myLinkedList.insert(2, 99);
myLinkedList.printList();

myLinkedList.remove(1);
myLinkedList.printList();

myLinkedList.reverse();
