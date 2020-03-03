//How much times the element repeat in an array
const numbers = {};

const countOccurrences = (array, searchElement) => {
	if(!Array.isArray(array)) {
		throw new Error('It has to be an Array')
	}
	return array.reduce((acc, el) =>{
		if(el===searchElement){acc++;}
		return acc;
	},0)

};


try{
	countOccurrences(numbers, 1);
}
catch (e) {
	console.log(e.message);
}

