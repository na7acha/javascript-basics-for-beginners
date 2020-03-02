const numbers = [1,2,3,4,1,5,3];

const except = (array, excluded) => {
	const aux = [];
	for(let el of array){
		if(!excluded.includes(el)){aux.push(el)}
	}
	return aux;
};

console.log(except(numbers, [1,2])); //[3,4]

