function areaOfCountry(country, area){
    return `${country} is ${(area / 148940000 * 100).toFixed(2)}% of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242)); //➞ "Russia is 11.48% of the total world's landmass"

console.log(areaOfCountry("USA", 9372610)); // "USA is 6.29% of the total world's landmass"

console.log(areaOfCountry("Iran", 1648195)); //➞ "Iran is 1.11% of the total world's landmass"