//return the truthy element in the array
const array = [1,2,3];
const array1 = [0, 1,2,3];
let countTruthy = (array) => {
	let count = 0;
	for(let el of array){
		if(el){
			count++;
		}
	}
	return count;
};