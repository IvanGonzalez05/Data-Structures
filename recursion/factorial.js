// Big O => O(n)
function findFactorialRecursive(number) {
  if (number < 2) return number;

  return number * findFactorialRecursive(number - 1);
}

// Big O => O(n)
function findFactorialIterative(number) {
  let factorial = 1;
  if (number === 2) answer = 2;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
