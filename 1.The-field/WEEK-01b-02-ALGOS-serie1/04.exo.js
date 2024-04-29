function detectWord(str){
    let newStr = [];
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")) //➞ "cat"

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")) //➞ "burglar"

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")) //➞ "embezzlement"