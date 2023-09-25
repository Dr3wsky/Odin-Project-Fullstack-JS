const testArr = [4, 3, 2, 1, 5, 6, 7, 2];
console.log(testArr)
console.log(testArr.length)

function mergeSort(list) {
    // Base case return sorted
    if (list.length<2) return list;
    let mergedList = [];
    // Split list in half
    let mid = list.length/2;
    let Larr = list.slice(0, mid);
        if (Larr.length>=2) {
            Larr = mergeSort(Larr);
        }
    let Rarr = list.slice(mid,list.length);
            if (Rarr.length>=2) {
            Rarr = mergeSort(Rarr);
        }
    if (Larr[0]<Rarr[0]) {
       return mergedList = Larr.concat(Rarr);
    } else {
        return mergedList = Rarr.concat(Larr);
    }

}

    console.log(mergeSort(testArr));