// without memoization: Big O (2^n)
function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// with memoization: Big O(n). Much better
function cachedFibonacci() {
  // declare the cache
  let cache = {};
  // return a function (thanks to closures)
  return function fib(n) {
    // if n is in the cache, return it
    if (n in cache) return cache[n];

    if (n < 2) return n;

    // cache of n equals to the recursion
    cache[n] = fib(n - 1) + fib(n - 2);

    // return its value
    return cache[n];
  };
}

// getting the cached function without losing the reference to cache
const memoizedFibonacci = cachedFibonacci();
console.log(memoizedFibonacci(80));
