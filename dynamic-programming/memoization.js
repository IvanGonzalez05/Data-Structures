// dynamic programming it's an optimization technique, using
// something called 'cache'

// caching is a way to store values, so we can use them later on

// a simple function that adds 80 to a number
// imagine it takes a lot of time. if we pass the same
// values to it, will always take a lot of time
function addTo80(n) {
  console.log("long time of normal");
  return n + 80;
}

// notice that "addTo80" logs out the message 3 times
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

// to optimize this, lets use memoization
// declara an object (hash table) called cache (can be memo)
// and inside the function, we add a guard conditional
// that says if the value of n is in the cache, lets return it
// without doing calculations. Otherwise, calculate it
// and add it to the cache
let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) return cache[n];

  console.log("long time of memoized");
  return (cache[n] = n + 80);
}

// notice that "memoizedAddTo80" logs out the message once, because the value is already cached
// since the value was already cached in the second
// run, just returns the value
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

// lets improve it a little bit
// notice how the cache is now inside the function
// and now instead of returning the cache directly,
// return a function. This is called closures.
function memoizedAddTo80Improved() {
  let cache = {};
  return function (n) {
    if (n in cache) return cache[n];

    console.log("long time of memoized improved");
    return (cache[n] = n + 80);
  };
}

// now I can store the function that is returned by memoizedAddTo80Improved
// and use it as intented without losing the reference to the cache
const memoized = memoizedAddTo80Improved();
console.log(memoized(5));
console.log(memoized(5));
