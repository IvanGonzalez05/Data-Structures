// Stack is a LIFO (Last In First Out) data structure

// Big O
// lookup O(n)
// pop O(1)
// push O(1)
// peek O(1)

/** STACK IMPLEMENTATION USING LINKED LISTS */
// to implement the class, we are using the nodes as in Linked Lists
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   // the stack has a top, bottom and length property
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.lenght = 0;
//   }

//   // peek returns the last element (the one in the top)
//   peek = () => this.top;
//   // same as above, but longer
//   // peek() {
//   //   return this.top;
//   // }

//   // add a value to the top
//   push(value) {
//     const newNode = new Node(value);

//     // when adding the first element, both top and bottom has the same value
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       // if there's already a value,
//       // gotta hold the prev top reference
//       // then overwrite the current top
//       // and set the new top next value to the holded
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }

//     this.lenght++;
//     return this;
//   }

//   pop() {
//     // if top is empty, there's nothing to return
//     if (!this.top) return null;

//     // at deletion, if top and bottom are equal,
//     // must set bottom to null, to make sure the reference is collected by Garbage collector
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }

//     // if we want to return the removed top element
//     // gotta keep the reference and return it
//     const holdingPointer = this.top; // (*)
//     this.top = this.top.next;
//     this.lenght--;

//     return holdingPointer;

//     // if want to return the stack, we can return this instead of the holding pointer
//     // and comment out the (*) line
//     // return this;
//   }
// }

/** STACK IMPLEMENTATION USING ARRAYS */
// easier to implement and keeps the Big O the same in time. And less space
class Stack {
  constructor() {
    this.stack = [];
  }

  peek = () => this.stack[this.stack.length - 1];

  push = (value) => this.stack.push(value);

  pop = () => this.stack.pop();
}

const myStack = new Stack();

console.log(myStack.peek());
myStack.push(10);
myStack.push("hello");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
