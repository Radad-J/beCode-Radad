function caesarCipher(text, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.replace(/[a-z]/gi, char => {
        let index = alphabet.indexOf(char.toLowerCase());
        let newIndex = (index + num) % alphabet.length;
        if (newIndex < 0) newIndex += alphabet.length;
        return alphabet[newIndex];
    });
}

// Test cases
console.log(caesarCipher("zoo keeper", 2));     // Output: "bqq mggrgt"
console.log(caesarCipher("bqq mggrgt", -2));    // Output: "zoo keeper"
console.log(caesarCipher("My name is Henrique", 3));  // Output: "pb qdph lv khqultxh"
