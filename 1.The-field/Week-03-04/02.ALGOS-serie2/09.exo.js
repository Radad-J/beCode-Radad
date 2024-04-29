function reverseWords(sentence){
    //return sentence.trim().split(/\s+/).reverse().join(' ');
    return sentence.trim().split(' ').filter(sentence => sentence !== '').reverse().join(' ');
}

console.log(reverseWords(" the sky is blue")) //➞ "blue is sky the"

console.log(reverseWords("hello   world!  ")) //➞ "world! hello"

console.log(reverseWords("a good example")) //➞ "example good a"