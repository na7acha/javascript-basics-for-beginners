//Sum all of mutiples of 3 and 5
// if limit = 10 --> of 3: 3,6,9 --> of 5: 5, 10 --> sum = 33
let sum = (limit) => {
	let count = 0;
	for(let i=0; i<=limit; i++){
		if(i%3===0||i%5===0){
			count +=i;
		}
	}
	return count;
};

sum(10);