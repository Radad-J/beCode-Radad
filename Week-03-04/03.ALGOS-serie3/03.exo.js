function isSmooth(sentence) {
    const words = sentence.toLowerCase().split(' ');
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i].slice(-1) !== words[i + 1][0]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // ➞ true
console.log(isSmooth("Someone is outside the doorway")); // ➞ false
console.log(isSmooth("She eats super righteously")); // ➞ true