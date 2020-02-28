let x = 10;
let y = x; //10

x = 20; //They are independent x=20, y=10

let xO = {value:10};
let yO = xO; //Copy the address of the reference, the copy elements in the memories
xO.value = 20;
console.log(x);//{value:20}
console.log(y);//{{value:20} They are not independent

let increase = (number) => number++;
let increaseObject = (obj) => obj.value++;


let number = 10;
increase(number); //11 number only changed in the scope of the function
console.log(number); //10

let obj = {value:10};
console.log(increase(obj));
console.log(obj);