function analyzeArray(arr) {
    // Checks the object passed is array
    if (!Array.isArray(arr)) return null

    const obj = {
        average: undefined,
        min: undefined,
        max: undefined,
        length: arr.length, 
    }
    return obj;
}

module.exports = analyzeArray