const numbers = [1,-1,2,3];

const filtered = numbers.filter((value)=>value>0);

const mapped = filtered.map((value)=>`<li>${value}</li>`);

console.log(mapped); //[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

const html = `<ul>${mapped.join('')}</ul>`;

console.log(html); //<ul><li>1</li><li>2</li><li>3</li></ul>

const object = filtered.map((value)=>{
	return {value};
});

console.log(object); //[ { value: 1 }, { value: 2 }, { value: 3 } ]

const simple = numbers
	.filter((value)=>value>0)
	.map(value=>({value}) )
	.filter(obj => obj.value>1);

console.log(simple);//[ { value: 2 }, { value: 3 } ]