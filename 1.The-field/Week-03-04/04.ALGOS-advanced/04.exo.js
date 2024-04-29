function reverseWord(sentence){ 
    //sentence.trim().split(' ').filter(sentence => sentence !== '').reverse().join(' ');
    let arr  = sentence.trim().split(' '); for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('').reverse().join('').toLowerCase(); 
    } 
    return arr.join(' '); }
    console.log(reverseWord("This is a string of words")) //➞ "siht si a gnirts fo sdrow"