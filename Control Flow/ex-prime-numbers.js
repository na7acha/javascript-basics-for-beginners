//List the primes numbers based in a limit
let isPrime = (number) => {
	for (let factor=2; factor <number; factor++){
		if(number%factor===0){
			return false;
		}
	}
	return true;
};

let showPrimes = (limit) => {
	for(let num=2; num<=limit; num++){
		if(isPrime(num)){console.log(num);}
	}
};


console.log(showPrimes(10));