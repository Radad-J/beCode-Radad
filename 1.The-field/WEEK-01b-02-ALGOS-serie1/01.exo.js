function calcAge(ageByYear){
    const daysPerYear = 365;
    if(ageByYear >= 0){
        let ageByDay = ageByYear * daysPerYear;
        return ageByDay;
    }else{
        return "Sorry the age should be a positive number.";
    }
}

console.log(calcAge(65)) //➞ 23725
console.log(calcAge(0)) //➞ 
console.log(calcAge(20)) //➞ 7300