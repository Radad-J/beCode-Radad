function findBrokenKeys(correct, wrong) {
    const brokenKeys = [];
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== wrong[i] && !brokenKeys.includes(correct[i])) {
            brokenKeys.push(correct[i]);
        }
    }
    return brokenKeys;
}

// Test cases
console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ➞ ["p"]
console.log(findBrokenKeys("starry night", "starrq light")); // ➞ ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5")); // ➞ ["b", "e", "v", "n"]