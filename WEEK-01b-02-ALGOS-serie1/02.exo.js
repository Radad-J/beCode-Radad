function addUp(numToAdd){
    if(numToAdd >= 1 && numToAdd <= 1000){
        let addedNum = 0;
        for(let i=1; i <= numToAdd; i++){
            addedNum += i;
        }
        return addedNum;
    }else{
        return "Sorry the number should be between 1 and 1000";
    }
}

console.log(addUp(4)) //➞ 10
console.log(addUp(13)) //➞ 91
console.log(addUp(600)) //➞ 