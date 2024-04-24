function possibleBonus(a, b){
    let bonus = false;
    for(let i = 1; i <= 6; i++){
        if((a + i) === b){
            bonus = true;
        }
    }
    return bonus;
}
console.log(possibleBonus(3, 7)) //➞ t

console.log(possibleBonus(1, 9)) //➞ f

console.log(possibleBonus(5, 3)) //➞ f