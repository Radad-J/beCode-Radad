function findPairs(numArray, sum) {
    const pairs = [];

    // Iterate over each number in the array
    for (let i = 0; i < numArray.length; i++) {
        const num1 = numArray[i];
        
        // Iterate over each subsequent number in the array
        for (let j = i + 1; j < numArray.length; j++) {
            const num2 = numArray[j];
            
            // Check if the sum of num1 and num2 equals the given sum
            if (num1 + num2 === sum) {
                pairs.push([num1, num2]);
            }
        }
    }

    return pairs;
}

// Test
console.log(findPairs([1, 6, 4, 5, 3, 3], 7)); // Output: [[1, 6], [4, 3], [4, 3]]
