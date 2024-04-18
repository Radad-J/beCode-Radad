/** console.log("I am in the console");

var a = "3";
var b = "8";
var temp = a;

a = b;
b = temp;

console.log("a is " + a);
console.log("b is " + b);


// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
// YOUR CODE BELOW THIS LINE:
let whisper  = message.toLowerCase(message.trim());
console.log(whisper);

let word = "Dumbledore";
console.log(word.charAt(word.length - 1));

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5, 9).replace('o', 'e');
console.log(facialHair);

//Create a random number from 0 to 10 by multiplyin the number by 11 to get a range from 0 to 10.99 
//Round the random number to the lowest integer
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

//Create a random number from 0 to 5 by multiplyin the number by 6 to get a range from 0 to 5.99 
//Round the random number to the lowest integer
let randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);


let personName = prompt("What's your name ?");

let age = prompt("How old are you ?");

let city = prompt("Where do you live ?");

const personText = `Your name is ${personName} you are ${parseInt(age)} and you live in ${city}.`;

alert(personText);

//Vat exercise
let price = prompt("Enter the price.");
let totalPrice = parseFloat(price) + (parseFloat(price) * 21 / 100);
alert(`The final price with TVA is ${totalPrice.toFixed(2)}`);

let radius = prompt("Enter the radius");
let surface = Math.PI * radius * radius;
alert(surface.toFixed(2));

//Calculator
let firstNum = parseInt(prompt("Enter first number"));
let secondNum = parseInt(prompt("Enter second number"));

alert("Addition is " + (firstNum + secondNum));
alert("Sustraction is " +  (firstNum - secondNum));
alert("Multiplication is " + (firstNum * secondNum));
alert("Division is " + (firstNum / secondNum));

let nameP = prompt("Whats your name ?");
let preference = prompt(`What do you like most cats or dogs ?`);
if (preference == "cats"){
    alert(`Hi ${nameP} ! Who doesn't like cats ? the cutest and the fluffiest.`);

}else if (preference == "dogs"){
    alert(`Hi ${nameP} ! A loyal puppy ? I couldn't ask for more !`);
} else {
    alert("Please enter a correct answer");
} 
let age =  parseInt(prompt("Whats your age ?"));
if(age < 18){
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    alert("Powering On. Enjoy the ride!")
}

let fruit = prompt("Whats your favourite fruit ?").toLowerCase();

if(fruit == "bananas"){
    alert("I like bananas too :)");

}else if (fruit == "strawberry"){
    alert("I love strawberries");

}else if (fruit == "grape"){
    let grapesColor = prompt("Do you prefer green or purple grapes ?").toLocaleLowerCase();

if(grapesColor == "purple"){
    alert("I don't like purple grapes :(");

    }else if(grapesColor == "green"){
        alert("Green grapes are okay :) ");
        
    }else{
        alert("Sorry i don't understand you.")
    }

}else{
    alert(`Sorry i don't understand the word you said : ${fruit}`);
}

let fruits = ["apple", "bananas", "grape", "kiwi"];
let vegetables = ["potatoes", "onion"];

fruits.push("lkhokh");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("peach", "avocado");
console.log(fruits);

fruits.shift();
console.log(fruits);

let arrayFV = fruits.concat(vegetables);
console.log(arrayFV);

let joinedArray = fruits.join(', ');
console.log(joinedArray);

console.log(fruits.slice(2, 5));

let splitString = "NOABCDEFAGHIJK".split('A');
console.log(splitString);

var originalArray = [1, 2, 3, 4, 5];

// Removing elements starting from index 2, removing 2 elements

var splicedFruits = fruits.splice(2, 2);
console.log(splicedFruits);
console.log(fruits);

console.log(fruits.reverse());

console.log(fruits.sort());

console.log(fruits.includes("apple"));

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = "Luna";
console.log(leaderboard);
leaderboard[3] = "Draco";
console.log(leaderboard);

const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

let newArray = [initialArray[7][0], initialArray[2][1], initialArray[4][0]];
console.log(newArray);

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);

const product = {
    name:  "IPhone15",
    inStock: true,
    price: 1249.90,
    includedInPackage: ["case", "earphones", "charger"],
}
console.log(product.includedInPackage[1]);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
let fullAdress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
restaurant.stars = 5;

console.log(fullAdress);
console.log(restaurant);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const colors = ["blue", "red", "violet", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
for(let i = animals.length - 1;i >= 0 ;i--){
    console.log(animals[i]);
}

const users = [ 
    {
        firstName: "Vito",
        lastName: "Corleone",
    },
    {
        firstName: "William",
        lastName: "Wallace",
    },
    {
        firstName: "Harry",
        lastName: "Potter",
    },
    {
        firstName: "Amadeus",
        lastName: "Mozart",
    },
    {   
        firstName: "Barack",
        lastName: "Obama",
    },
];

for (let i = 0; i < users.length; i++) {
    console.log(`${i + 1}. My full name is ${users[i].firstName} ${users[i].lastName}`);
}

const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
];

  // I can use nested loops to do that :

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    }
}*/

let maxNumber = parseInt(prompt("Choose a random number"));
console.log(maxNumber);
