function capitalize(str) {
    if (typeof str !== 'string') return null;
    

    if (str.split()) {
        const strArr = str.split(' ');
        const newArr = [];
        for(let i = 0;  i < strArr.length; i++) { 
            newArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase()
        }
        return newArr.join(' ')
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
}

module.exports = capitalize;