// Big O
// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

// static arrays vs dynamic arrays
// static arrays have fixed sizes. This means we need to specify
// the amount of elements the array will store as maximum
// Dynamic arrays allows us to copy and rebuild the array in a new location
// if more space is needed. So, it expands automatically its append can
// be O(n) when the array is 'full'. Under the hood, it copy all elements
// (which is O(n)), doubles the space and then insert the new element

// its called MyArray because Array is a reserved keyword
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // method to get an element from the array using its index
  get = (index) => this.data[index];

  // method to insert an element to the end of the array
  push = (item) => {
    this.data[this.length] = item;
    this.length++;
    return this;
  };

  // method to delete the last element in the array
  pop = () => {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  };

  // when deleting an item which is not the last
  // we need to 'rearrange' the indexes of all the elements after the deleted item
  // this is what shiftItems does
  shiftItems = (index) => {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  };

  // method to delete an item in any position by its index
  deleteByIndex = (index) => {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  };
}

const array = new MyArray();
array.push(1).push(2).push(3);
console.log(array.get(2));
console.log(array.pop());
console.log(array);
