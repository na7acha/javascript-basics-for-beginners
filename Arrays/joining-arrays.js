const numbers = [1,2,3];
const joined = numbers.join(',');
console.log(joined); //1,2,3

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); //[ 'This', 'is', 'my', 'first', 'message' ]
const partsJoined = parts.join('-');
console.log(partsJoined);//This-is-my-first-message
