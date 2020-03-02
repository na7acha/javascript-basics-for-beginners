const numbers = [1,-2,3];

const positive = numbers.every((value)=>value>=0);

console.log(positive); //false

const positionSome = numbers.some((value)=>value>0);

console.log(positionSome); //true
