function frames(frames, minutes){
    return frames * (minutes * 60);
}

console.log(frames(10, 1)) //➞ false

console.log(frames(10, 25)) //➞ true