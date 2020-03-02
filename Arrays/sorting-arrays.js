const numbers = [2,3, 1];
console.log(numbers.sort()); //[ 1, 2, 3 ]
console.log(numbers.reverse());//[ 3, 2, 1 ]

const courses = [
	{id:1, name: 'Node.js'},
	{id:2, name: 'JavaScript'},
];

const sorted = courses.sort((a,b)=>{
	if(a.name<b.name){return -1;}
	if(a.name>b.name){return 0;}
	return 0;
});

console.log(sorted); //[ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ] It is case sensitive, not work with 'javascript'

const coursesNon = [
	{id:1, name: 'Node.js'},
	{id:2, name: 'javaScript'},
];

const sortedNonSen = coursesNon.sort((a,b)=>{
	const aName = a.name.toUpperCase(); //It the same to put all of them toLowerCase
	const bName = b.name.toUpperCase();
	if(aName<bName){return -1;}
	if(aName>bName){return 0;}
	return 0;
});

console.log(sortedNonSen);
