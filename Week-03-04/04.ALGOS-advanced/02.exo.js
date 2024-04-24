function isPalindrome(text) {
    // Remove special characters, spaces, and punctuation marks and convert to lowercase
    const formattedText = text.toLowerCase().replace(/[^a-zA-Z]/g, '');
    
    // Compare the formatted text with its reversed version
    return formattedText === formattedText.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("kayak")); // ➞ true
console.log(isPalindrome("race car")); // ➞ true
console.log(isPalindrome("hello world")); // ➞ false
console.log(isPalindrome("Madam, I'm Adam")); // ➞ true