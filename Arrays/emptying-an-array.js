let numbers = [1,2,3,4];

//1
numbers = [];

//2
numbers.length = 0; //Best practice if you hace more than twice reference

//3
numbers.splice(0,numbers.length);

//4
while(numbers.length>0){
	numbers.pop();
}