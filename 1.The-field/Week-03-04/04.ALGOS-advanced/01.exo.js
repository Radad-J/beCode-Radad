function ransomNote(noteText, magazineText) {
    const magazineWords = magazineText.split(' ');

    // Iterate through note words
    for (const word of noteText.split(' ')) {
        const index = magazineWords.indexOf(word);
        if (index === -1) return false; // Word not found
        magazineWords.splice(index, 1); // Remove word from magazine
    }
    return true;
}

// Test cases
console.log(ransomNote("this is a secret note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")); // ➞ false
console.log(ransomNote("this is a note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")); // ➞ true
