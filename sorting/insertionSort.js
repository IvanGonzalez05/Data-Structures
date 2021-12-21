// there are cases when is extremely fast. Especcially when the list is almost sorted

// Big O:
// when the data is almost sorted or is small data O(n) in time. Otherwise is O(n^2)
// O(1) in space
const numbers = [99, 44, 6, 2, 1, 5, 63, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

console.log(insertionSort(numbers));
