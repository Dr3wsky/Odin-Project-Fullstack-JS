/**
 * The recursive solution to the fibonacci sequence question
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacii sequence
 */

// Fibonacci sequence with recursion
function fibRecurs(n) {
  const fibArr = [0, 1];
  if (n <= 0) return "Enter a positive, non-zero interger number of elements to be returned";
  if (n == 1) return fibArr[0];
  if (n == 2) return fibArr;
  return [...fibRecurs(n-1), fibRecurs(n - 1)[n - 2] + fibRecurs(n - 1)[n - 3]];
}

console.log(fibRecurs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibRecurs(1)); // returns [0]
console.log(fibRecurs(2)); // returns [0, 1]
console.log(fibRecurs(3)); // returns [0, 1, 1]
console.log(fibRecurs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]