/**
 * The non-recursive solution to the fibonacci sequence question!
 * @param {number} n : Getting the number of elements
 * @returns The array of elements of the fibonacii sequence
 */

// Fibonacci sequence with recursion
function fibRecurs(n) {
  if (n == 0) return [0]
  if (n == 1) return [0, 1]
  const arr = fibRecurs(n - 1)
  return [...arr, arr[n-1] + arr[n-2]]
}

console.log(`Fibonacci Sequence solved recursively is ${fibRecurs(8)}`)

// Fibonacci sequence with iteration
function fibIter(n) {
    let fibArr = [0];
    let a = 1;
    let b = 1;
    fibArr.push(a);
    fibArr.push(b); 
    for (let i = 3; i<=n; i++) {
        c = a + b;
        fibArr.push(c);
        a = b; 
        b = c; 
    }
    return fibArr;
}

console.log(`Fibonacci Sequence solved iteratively is ${fibIter(8)}`)