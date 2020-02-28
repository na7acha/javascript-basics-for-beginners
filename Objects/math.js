Math.random(); //new random number between 0 to 1
//Getting a random number between two values
let getRandomArbitrary = (min, max) => Math.random()*(max-min) + min;
console.log(getRandomArbitrary(1,2));
console.log(getRandomArbitrary(10,30));

Math.round(1.8); //2
Math.max(1,3,89,90); //return max number in the list
Math.min(1,3,89,90); //return min number in the list