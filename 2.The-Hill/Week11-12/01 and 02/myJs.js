// myJs.js

// Require the path module
const path = require('path');

// Declare a variable and assign a string value to it
var myName = "John Doe";

// Print the variable to the console
console.log(myName);

setTimeout(() => {
    console.log(path.parse(__filename).name);
}, "3000");