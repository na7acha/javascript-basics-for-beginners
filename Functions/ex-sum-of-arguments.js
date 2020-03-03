//sum() any arguments and array

let sum = (...args) => {
	if(!Array.isArray(args[0])){
		return args.reduce((acc, el)=>acc+=el);
	}
	return args[0].reduce((acc, el)=>acc+=el);
};

console.log(sum(1,2,3,4)); //10
console.log(sum([1,2,3,4])); //10
