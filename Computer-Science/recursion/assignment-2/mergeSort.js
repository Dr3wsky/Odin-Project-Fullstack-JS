/**
 * The main sorting Array
 * @param {array} arr Array in question
 * @returns Sorted array
 */

function mergeSort(arr) {
    // Base case return sorted
    if (arr.length === 0) return "Please provide a non-empty array";
    if (arr.length === 1) return arr;
    
    // Split array in halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid); 
    const right = arr.slice(mid, arr.length);
    
    // Return array of after recursively splitting into smallest parts and sorting
    return mergeOrdered(mergeSort(left), mergeSort(right));
}

function mergeOrdered(leftArr, rightArr) {
    // Initialize blank array to populate and index trackers
    const sortedArr = [];
    let idxL = 0; 
    let idxR = 0;

    // Push smallest value between each array to sorted
    while (idxL < leftArr.length && idxR < rightArr.length) {
        if (leftArr[idxL] < rightArr[idxR]) {
            sortedArr.push(leftArr[idxL]);
            idxL++;
        } else { 
            sortedArr.push(rightArr[idxR]);
            idxR++;
        }
    }

    // Push remaining values in array to sorted
    while (idxL < leftArr.length) {
        sortedArr.push(leftArr[idxL]);
        idxL++;
    }

     while (idxR < rightArr.length) {
        sortedArr.push(rightArr[idxR]);
        idxR++;
    }

    return sortedArr;
}
    
console.log(mergeSort([])) // []
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]