function analyzeArray(arr) {
    // Checks the object passed is array
    if (!Array.isArray(arr)) return 'Pass an array argument'

    // Sum numbers in array or returns null if not all items are numbers
    let sum = 0;
    let allNums = true;
    arr.forEach((num) => {
        if (typeof num !== 'number') allNums = false; 
        else sum += num;
    })
    if (!allNums) return 'Array includes non-numbers';

    const obj = { 
        average: sum / arr.length,
        min: arr.reduce((cur, prev) => {
                return Math.min(cur, prev);
            }),
        max: arr.reduce((cur, prev) => {
                return Math.max(cur, prev);
            }),
        len: arr.length     // Assigning len as length property as length is already a method in JS
    }
    return obj;
}

module.exports = analyzeArray