function sevenBoom(arr){
    let num = arr.filter(num => num.toString().includes('7'));
    return num[0] ? `Boom!` : `There is no 7 in the array`;
}


console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) //➞ "Boom!"
// 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])) //➞ "there is no 7 in the array"
// None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])) //➞ "Boom!"
// 97 contains the number seven.