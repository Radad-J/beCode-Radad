function oddishOrEvenish(num){
    let sum = 0;
    num = num.toString();
    
    for(let i = 0; i < num.length; i++){
        sum += parseInt(num[i]);
    }
    return sum % 2 ? "Oddish" : "Evenish";
}

console.log(oddishOrEvenish(43)) //➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)) //➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)) //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0