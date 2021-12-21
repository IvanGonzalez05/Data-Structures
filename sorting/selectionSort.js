// One of the 3 elementary sorts (the 3 are bubble sort, insertion sort, selection sort)

// Big O => O(n^2) in time and O(1) in space

const numbers = [99, 44, 6, 2, 1, 5, 63, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update min value if current is lower
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(numbers));
