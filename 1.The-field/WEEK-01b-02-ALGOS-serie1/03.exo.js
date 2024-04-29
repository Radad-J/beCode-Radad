function minMax(arr){
    if(Array.isArray(arr) && arr.length !== 0){
        let newArr = [];
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return newArr = [min, max];
    }else{
        return "Sorry this is not a valid array";
    }
}

console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]

console.log(minMax([2334454, 5])) // ➞ [5, 2334454]

console.log(minMax([1])) // ➞ [1, 1]