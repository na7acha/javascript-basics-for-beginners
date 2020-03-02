const arrayFromRange = (min, max) =>{
	let array = [];
	for(let i=min; i <=max; i++){
		array.push(i);
	}
	return array;
};

const numbers = arrayFromRange(1,4);
console.log(numbers); //[ 1, 2, 3, 4 ]

const negatives = arrayFromRange(-10, -4);
console.log(negatives); // [-10, -9, -8, -7, -6, -5, -4]
