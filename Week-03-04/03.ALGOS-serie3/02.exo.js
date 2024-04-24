function reverseOdd(sentence){
    //sentence.trim().split(' ').filter(sentence => sentence !== '').reverse().join(' ');
    let arr  = sentence.trim().split(' ');
    for(let i = 0; i < arr.length; i++){
        if((arr[i].length % 2)){
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    return arr.join(' ');

}

console.log(reverseOdd("Bananas")) //➞ "sananaB"

console.log(reverseOdd("One two three four")) //➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
//➞ "Make sure you only reverse words of odd length"