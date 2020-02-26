//Binary form 1 = 00000001 8 bits
// 2 = 00000010
console.log(1|2); //bitwise operator R = 00000011 = 3 if 0 1 --> 1
console.log(1&2); //bitwise operator R = 00000000 = 0 if 0 1 --> 0

//Access control system read, write and execute
// READ 100 --> 00000100
// READ AND WRITE 110
//AND EXECUTE 111

const read = 4; //100
const write = 2; //010
const execute = 1; //001

let myPermission = 0;
myPermission = myPermission | write | execute;
console.log(myPermission);
let message = (myPermission & read) ? 'yes':'no';
console.log(message);
