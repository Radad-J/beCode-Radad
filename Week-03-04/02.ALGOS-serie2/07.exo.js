function calculator(a, operation, b){
    if(operation === "-"){
        return a - b;
    }else if(operation === "+"){
        return a + b;
    }else if(operation === "*"){
        return a * b;
    }else if(operation === "/"){
        if(b === 0){
            return "Sorry we can't divide by 0!";
        }else{
            return a / b;
        }
    }
}


console.log(calculator(2, "+", 2)) //➞ 4

console.log(calculator(2, "*", 2)) //➞ 4

console.log(calculator(4, "/", 2)) //➞ 2