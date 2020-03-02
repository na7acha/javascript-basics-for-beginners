let numbers = [1,2,3,4];

const last = numbers.pop();
console.log(numbers); //[1,2,3,4]

const beginning = numbers.shift();
console.log(numbers); //[2,3,4]

numbers = [1,2,3,4];
const middle = numbers.splice(0,2);
console.log(numbers);//[3,4]