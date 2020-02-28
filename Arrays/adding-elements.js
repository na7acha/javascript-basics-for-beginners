const numbers = [3,4];


//End
numbers.push(5);
console.log(numbers); //[3,4,5]
//Beginning
numbers.unshift(8);
console.log(numbers);//[8,3,4,5]

//Middle
numbers.splice(2,0,10);
console.log(numbers);//[ 8, 3, 10, 4, 5 ]

