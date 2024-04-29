function fibonacci(num){
    let startArr = [1, 1];
    for(let i = 0;i < (num - 2);i++){
        startArr.push(startArr[startArr.length - 1] + startArr[startArr.length - 2]);
    }
    return startArr;
}
console.log(fibonacci(4)) //----> [1, 1, 2, 3]
console.log(fibonacci(9)) //----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(6)) //----> [1, 1, 2, 3, 5, 8]
