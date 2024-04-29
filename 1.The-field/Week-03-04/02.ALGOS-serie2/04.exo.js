function arrayOfMultiples(num, len){
    let arr = [];
    for(let i = 1; i <= len; i++){
        arr.push(i * num);
    }
    return arr;
}

console.log(arrayOfMultiples(7, 5)) //➞ [7, 14, 21, 28, 35]

console.log(arrayOfMultiples(12, 10)) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

console.log(arrayOfMultiples(17, 6)) //➞ [17, 34, 51, 68, 85, 102]