//String primitive
const message = 'This is my first message';
//String object
const another = new String('hi');

console.log(typeof message, typeof another); //string object

//Methods
message.length; //24
message[0]; //T
message.includes('my');//true
message.startsWith('This');//true
message.startsWith('this');//false
message.endsWith('e');//false
message.indexOf('my'); //8
message.replace('first','second');
message.toUpperCase();
message.toLowerCase();

message.trim(); //delete white space between words hola     d --> hola d

//Escope notation
//single code \', new line \n

message.split(' '); // ['this', 'is', 'my'....]