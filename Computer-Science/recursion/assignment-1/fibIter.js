/**
 * The non-recursive solution to the fibonacci sequence question!
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacii sequence
 */

// Fibonacci sequence with iteration
function fibIter(n) {
    // Initialize arrey start
    const fibArr = [0, 1];
    if (n <= 0) return "Enter a positive, non-zero interger number of elements to be returned";
    if (n == 1) return fibArr[0];
    if (n == 2) return fibArr;
    for (let i = 3; i<=n; i++) {
        fibArr.push(fibArr[fibArr.length-2] + fibArr[fibArr.length-1])
    }
    return fibArr;
}

console.log(fibIter(-2)); // returns "Enter a positive, non-zero interger number of elements to be returned"
console.log(fibIter(1)); // returns [0]
console.log(fibIter(2)); // returns [0, 1]
console.log(fibIter(3)); // returns [0, 1, 1]
console.log(fibIter(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]