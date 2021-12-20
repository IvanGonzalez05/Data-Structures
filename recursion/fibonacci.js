// Big O => O(N)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// Big O => O(2^N). Terrible
function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciIterative(8));
// console.log(fibonacciRecursive(8));

// to notice the Big O, run the recursive, then the iterative
console.log(fibonacciRecursive(40));
console.log(fibonacciIterative(40));
