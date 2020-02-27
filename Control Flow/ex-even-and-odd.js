//Show a list of  numbers what even and odd
let showNumbers = (limit) => {
	for(let i =0; i<=limit; i++){
		console.log(i%2 === 0? i+' EVEN':i+' ODD');
	}
};

showNumbers(10);