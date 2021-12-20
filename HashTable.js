// Big O
// lookup O(1)
// insert O(1)
// delete O(1)
// search O(1)

// hash function. Implements the md5 hash algorithm, that generates a value based on the input.
// If the input is always the same, the hash value will always be the same (this is called idempotent)
// These value is the key of the hash table
// usually the hash function is optimized to perform really fast

// hash collisions:
// when the hash function asign a new value on an existing occupied space in memory. This is a problem because overwrites the previous value. To solve this, Linked Lists are used

// in Js a HashTable is a plain object or the Map object

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function. Its made by Zero to Master. Its not the actual md5 hash function.
  // since Js does not have Encapsulation, its a standard to add an underscore(_) to methods that are supposed to be private
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  // method to store (set) a value using a key
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  // method to get a value using its key
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }

    return undefined;
  }

  // method to get the keys of the hash table (this is O(n))
  keys() {
    const keysArrays = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) keysArrays.push(this.data[i][0][0]);
    }

    return keysArrays;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 50_000_000);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
