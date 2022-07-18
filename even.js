const isEven = function (num){
    let answer = num % 2;
    if(answer === 0){ 
        console.log(num+" is an even number");
    } else {
        console.log(num+" is not an even number");
    }
        return answer;
}

isEven(5)

