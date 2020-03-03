let x = 1;
x = 'a';
//Js coult change the typeof a variable

function sum(a,b){
	return a+b;
}

console.log(sum(1,2)); //3
//console.log(sum(1)); //NaN
//console.log(sum()); //NaN
//console.log(sum(1,2,3,4)); //3

function sumAr(a,b){
	let total = 0;
	for(let value of arguments){
		total += value;
	}
	return total;
}

console.log(sumAr(1,2, 5)); //8