// One of the 3 elementary sorts (the 3 are bubble sort, insertion sort, selection sort)

// its one of the least efficient:
// Big O =>  O(n^2) in time and O(1) in space

const numbers = [99, 44, 6, 2, 1, 5, 63, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort(numbers));
