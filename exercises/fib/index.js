// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Example:
// forms the first ten entries of the fibonacci series.
//   fib(4) === 3

function memoization(fn) {
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  //BASE CASE

  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

const fib = memoization(slowFib);

module.exports = fib;

//My solution
// function fib(n) {
//     const numbers = [0, 1];
//     let firstIndex = 0;
//     let secondIndex = 1;

//     for (let i = 0; i < n; i++) {
//       numbers.push(numbers[firstIndex] + numbers[secondIndex]);
//       firstIndex++;
//       secondIndex++;
//     }

//     return numbers[n];

//     //RUNTINE COMPLEXITY O(n);
//   }

//First given solution
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//       const a = result[i - 1];
//       const b = result[i - 2];

//       result.push(a + b);
//     }

//     return result[n];
//   }

// Second given solution, using recursion
// function fib(n) {
//   // BASE CASE
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

//Third solution, using memoization
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   // BASE CASE
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);
