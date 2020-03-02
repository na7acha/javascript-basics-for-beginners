//Implements includes method
const numbers = [1,2,3,4];

const includes = (array, element) => !!(array.find((val) => val === element));

console.log(includes(numbers, 2));

//solution in course

const other = (array, element) => {
	for(let a of array){
		if(a===element){return true}
	}
	return false;
};

console.log(other(numbers,2));