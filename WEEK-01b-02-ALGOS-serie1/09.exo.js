function calculateFuel(distance){
    return distance*10 >= 100 ? distance * 10 : 100;
}

console.log(calculateFuel(15)) //➞ 150

console.log(calculateFuel(23.5)) //➞ 235

console.log(calculateFuel(3)) //➞ 100