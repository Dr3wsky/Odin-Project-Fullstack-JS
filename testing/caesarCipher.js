const cipher = {
        
    alpahDict: {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    },

    encrypt: function(str, shift) { 
        // Reutrns null if not string
        if (typeof str !== 'string') return null;

        const newStrArr = [];
        let isUpper = false;
        for (let i = 0; i < str.length; i++) {
            // Checks for upper case letters, and swtiches to lower or skips if special character
            let char = str[i];
            if (char === char.toUpperCase()) {
                char = char.toLowerCase();
                if (!this.alpahDict.hasOwnProperty(char)) {
                    newStrArr[i] = char;
                    continue;
                }
                isUpper = true;
            }
            // Finds starting indez
            const idx = this.alpahDict[char];
            // Shift idx and assign new char 
            if (idx + shift > 26) {
                const newIdx = idx + shift - 26;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } else if (idx + shift < 0) {       // Handles negative results from decrypt call
                const newIdx = 26 + idx + shift;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } else {
                const newIdx = idx + shift;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);

            }
            // Return null if the value is not found in the object
            if (char === '?') return null;
            // corrects case of lettering to input
            if (isUpper) {
                newStrArr[i] = newStrArr[i].toUpperCase();
                isUpper = !isUpper;
            }
        };
        return newStrArr.join('');
    },
    
    decrypt: function(str, shift) { 
        // calls encrypt with negative shift
        return this.encrypt(str, -shift);
    },
        

    findKeyByValue: function(obj, value) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === value) return key
        }
        return '?'; // Return null if the value is not found in the object
    }  

};

module.exports = cipher