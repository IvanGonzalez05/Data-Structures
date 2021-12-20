// Queue is a FIFO (First In First Out) data structure

// Big O
// lookup O(n)
// enqueue O(1) --> add to the end
// dequeue O(1) --> removes from the start
// peek O(1) --> return the first element without removing it

// a queue usually is faster than an array at removing the first element. Notice that dequeue is O(1)

/** QUEUE IMPLEMENTATION USING LINKED LISTS */
// to implement the class, we are using the nodes as in Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  // the stack has a top, bottom and length property
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // peek returns the first element
  peek = () => this.first;

  // add a value to the queue
  enqueue(value) {
    const newNode = new Node(value);

    // when adding the first element, both last and first has the same value
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  // remove from the start of the list
  dequeue() {
    // if first is empty, there's nothing to return
    if (!this.first) return null;

    // at deletion, if first and last are equal,
    // must set last to null, to make sure the reference is collected by Garbage collector
    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first; // (*)
    this.first = this.first.next;
    this.length--;

    return holdingPointer;
    // if want to return the stack, we can return this instead of the holding pointer
    // and comment out the (*) line
    // return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.dequeue(); // Removes Joy
console.log(myQueue.peek()); // Matt
