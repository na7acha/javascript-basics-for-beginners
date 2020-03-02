const numbers = [1,2,3,7,4];

const getMax = (array) => {
	let max = 0;
	if(array.length===0){return undefined};
	for(let el of array){
		if(el>max){
			max = el;
		}
	}
	return max;
};

const max = getMax(numbers);
console.log(max);

const getMaxReduce = (array) => array.reduce((acc, el) =>{
	if(array.length===0){return undefined}
	return (el>acc?el:acc);
}, 0);
const maxReduce = getMaxReduce(numbers);
console.log(maxReduce);