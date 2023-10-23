function reverseString(str) {
    if (typeof str !== 'string') return null;

    return str.split("").reverse().join("");
}

reverseString(8)

module.exports = reverseString;