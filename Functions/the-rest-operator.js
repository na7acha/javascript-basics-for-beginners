function sum(...args){
	return args.reduce((a,b)=>a+b);
}

console.log(sum(1,2,3)); //6

function shopCard(discount, ...prices){
	return prices.reduce((a,b)=>a+b)*(1-discount);

}

console.log(shopCard(0.1,20,30)); //6