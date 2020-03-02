const numbers = [1,2,3,4];
const move = (array, index, offset) => {
	let aux = [...array];
	const value = array[index];
	const position = offset + index;
	const indexMove = position>0?offset:position;

	if(offset>=array.length || position < 0){
		return console.error('Invalid offset');
	}
	aux.splice(index,1);
	aux.splice(indexMove, 0, value);
	return aux;
 };

//numbers = [1,2,3,4];
//const middle = numbers.splice(0,2);
//console.log(numbers);//[3,4]

const result = move(numbers, 1, -1);
console.log(result);