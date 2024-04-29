function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end indices without using array destructuring
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move the start pointer forward
        start++;

        // Move the end pointer backward
        end--;
    }
    return arr;
}

// Test
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["poof", "rer", "Paris", "Bruxelles", "non"]));
// Output: [5, 4, 3, 2, 1]

