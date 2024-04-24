function convert(input) {
    if (input.includes("°C")) {
        return Math.round(parseFloat(input) * 9 / 5 + 32) + "°F";
    } else if (input.includes("°F")) {
        return Math.round((parseFloat(input) - 32) * 5 / 9) + "°C";
    }
    return "Error";
}

// Test cases
console.log(convert("35°C")); // ➞ "95°F"
console.log(convert("19°F")); // ➞ "-7°C"
console.log(convert("33")); // ➞ "Error"
