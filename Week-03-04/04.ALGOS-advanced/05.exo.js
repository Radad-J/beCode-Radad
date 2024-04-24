function reverseArray(arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at indices i and j
    }
}

// Test
const arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr); // Output: [5, 4, 3, 2, 1]
