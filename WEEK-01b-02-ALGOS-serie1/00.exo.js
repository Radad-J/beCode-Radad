function makesTen(num1, num2){
    let sum = num1 + num2;
    if(num1 === 10 || num2 === 10 || sum === 10){
        return true;
    }else{
        return false;
    }
}

console.log(makesTen(9, 10));

console.log(makesTen(9, 9));

console.log(makesTen(1, 9));