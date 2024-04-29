function animals(chickens, cows, pigs){
    let totalChickens = chickens * 2;
    let totalCows = cows * 4;
    let totalPigs = pigs * 4;
    return totalChickens + totalCows + totalPigs;
}

console.log(animals(2, 3, 5)) //➞ 36
console.log(animals(1, 2, 3)) //➞ 22
console.log(animals(5, 2, 8)) //➞ 50