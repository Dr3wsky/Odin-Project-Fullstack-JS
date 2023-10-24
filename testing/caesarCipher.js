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
        for (let i = 0; i < str.length; i++) {
            // Skips if char is not in alphabet
            if (!this.alpahDict.hasOwnProperty(str[i])) continue;
            const idx = this.alpahDict[str[i]];
            // Shift idx and assign new char 
            if (idx + shift > 26) {
                const newIdx = idx + shift - 26;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } else {
                const newIdx = idx + shift;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } 
        };
        return newStrArr.join('');
    },
    
    decrypt: function(str, shift) { 
        // Same as encrypt but shifts index backwards
        if (typeof str !== 'string') return null;

        const newStrArr = [];
        for (let i = 0; i < str.length; i++) {
            if (!this.alpahDict.hasOwnProperty(str[i])) continue;

            const idx = this.alpahDict[str[i]];
            if (idx - shift < 0) {
                const newIdx = 26- idx + shift;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } else {
                const newIdx = idx - shift;
                newStrArr[i] = this.findKeyByValue(this.alpahDict, newIdx);
            } 
        };
        return newStrArr.join('');
    },
    findKeyByValue: function(obj, value) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === value) return key
        }
        return '?'; // Return null if the value is not found in the object
}   
}

console.log(cipher.encrypt('hello', 5));
console.log(cipher.decrypt('mjqqt', 5));

// export { cipher.encrypt };