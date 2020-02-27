//If input divisible 3 => 'Fizz'
//If input divisible 5 => 'Buzz'
//If divisible 3 and 5 => 'FizzBuzz'
//If not a number => 'Not a number'
//else input

let fizzBuzz = (input) => {
    if(input%3===0&&input%5===0){
        return 'FizzBuzz';
    }else if(input%5===0) {
        return 'Buzz';
    }else if(input%3===0) {
        return 'Bizz';
    }else if(!Number.isInteger(input)){ //typeof input!== 'number'
        return 'Not a number';
    }
    return input;
};
