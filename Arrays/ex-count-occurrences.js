//How much times the element repeat in an array
const numbers = [1,2,1,3,4,1];

const countOccurrences = (array, searchElement) => {
	return array.reduce((acc, el) =>{
		if(el===searchElement){acc++;}
		return acc;
	},0)

};

const count = countOccurrences(numbers, 1);
console.log(count); //3
