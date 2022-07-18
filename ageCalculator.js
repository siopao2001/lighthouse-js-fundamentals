function ageCalculator (name, bday, currentYear){ 
    let age = currentYear - bday
    return name +" is "+age+" years old.";
}

console.log (ageCalculator ("Paolo",1982, 2021))