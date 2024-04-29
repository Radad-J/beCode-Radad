/*
//RemoveDuplicates
const removeDuplicates = (data)=> [...new Set(data)];//Your code here in one line

console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// Result : [4, 9, 5, 1, 3, 2, 8]

console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// Result : ['hello', 'world', 'goodbye']

console.log(removeDuplicates([true, true, false, true, true, false]));
// Result : [true, false]


//Capitalize
const capitalize = (str) => str.toUpperCase();

console.log(capitalize("belgium"));
// Result : "Belgium"

console.log(capitalize("brazil"));
// Result : "Brazil"

console.log(capitalize("brussels"));
// Result : "Brussels" 


//dayDiff
const dayDif = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")));
// Result : 366


//Average
const average = (...args) => args.reduce((a, b)=> a + b) / args.length; 
console.log(average(1, 2, 3, 4));
// Result: 2.5


//getSmallest
const getSmallest = (arrMin) => Math.min(...arrMin);
const arr = [13, 7, 11, 3, 9, 15, 17];
console.log(getSmallest(arr));
// Result: 3


//areEqual
const areEqual = (arrA, arrB) => arrA.every(element => arrB.includes(element));

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

console.log(areEqual(arr1, arr2));
// Result : true

console.log(areEqual(arr1, arr3));
// Result : false


//randomRGB
const randomRGB = () => `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

console.log(randomRGB());


//occurencies
const occurencies = (word, letter) => [...word].filter(char => char === letter).length;

// Example usage:
console.log(occurencies("hello", "l"));
// Result : 2

occurencies("abracadabra", "a");
// Result : 5

occurencies("oups", "z");
// Result : 0


//onlyPositives
const onlyPositives = (arr) => [...arr].filter(num => num > 0).reduce((a, b) => a + b, 0);

console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// Result : 14

console.log(onlyPositives([-3, -4, -2]));
// Result : 0


//ScanAndFind
const scanAndFind = (listObj, obj) => listObj.filter(element => element[Object.keys(obj)] === Object.values(obj)[0]); //element.lastName == obj.lastName

console.log(scanAndFind(
    [
    {
        firstName: "Vito",
        lastName: "Corleone",
    },
    {
        firstName: "Jon",
        lastName: "Snow",
    },
    {
        firstName: "Harry",
        lastName: "Potter",
    },
    {
        firstName: "Michal",
        lastName: "Corleone",
    },
    ],
    {
    lastName: "Corleone",
    }
));

console.log(scanAndFind(
    [
    { fullName: "Roi Baudoin", id: 49762 },
    { fullName: "Margareth Tatcher", id: 94357 },
    { fullName: "Barack Obama", id: 76458 },
    { fullName: "Emmanuel Macron", id: 10687 },
    { fullName: "Charles de Gaulle", id: 67098 },
    { fullName: "Boris Johnson", id: 16437 },
    ],
    { id: 10687 }
));
*/