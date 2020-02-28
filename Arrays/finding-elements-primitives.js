//Primitives
const numbers = [1,2,3,1,4];

console.log(numbers.indexOf(3));//2
console.log(numbers.indexOf('sa')); //-1
console.log(numbers.indexOf('1')); //-1

console.log(numbers.lastIndexOf(1));//3 because is the last same index

//Elements exist in the array
console.log(numbers.indexOf(1)!==-1); //true

//New form
console.log(numbers.includes(1)); //true

//With second parameter at start count
console.log(numbers.indexOf(1)); //0
console.log(numbers.indexOf(1,2)); //3