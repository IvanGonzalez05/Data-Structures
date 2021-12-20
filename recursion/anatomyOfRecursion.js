// The anatomy of a recursive function

// returns an error. stack overflow
//

// a recursive function has two cases:
// recursive case: call the function again
// base case: if condition is met, return

let counter = 0;
function inception() {
  // base case
  // console.log(counter);
  if (counter > 3) return "done!";
  counter++;

  // returning the function call to itself. If the
  // return is not included, and we just execute the
  // function again, no value will be returned
  return inception();
}

console.log(inception());

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually we have 2 returns

// Recursive VS Iterative:
// recursion sometimes makes our code DRY (do not repeat yourself) and sometimes improves readability
// but usually fulls the stack of operations

// Iterative usually has lower Big O notation, which is good

// there's something called tail call optimization, that allows recursions to be called without increasing the call stack size. Pretty cool

// when to use recursion:
// when searching through trees or graphs, recursion is usefull, and better than iterative
// sometimes recursion is prefer when sorting
