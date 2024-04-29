function ransomNote(noteText, magazineText) {
    const noteWords = noteText.split(' ');
    const magazineWords = magazineText.split(' ');
    
    // Check if every word in the note text is included in the magazine text
    return noteWords.every(word => magazineWords.includes(word));
}

// Test cases
console.log(ransomNote("this is a secret note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")); // ➞ false
console.log(ransomNote("this is a note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")); // ➞ true
