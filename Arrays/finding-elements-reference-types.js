const courses = [
	{id: 1, name: 'name1'},
	{id: 2, name: 'name2'},
];

let found = courses.find((course) => course.name === 'name1');

console.log(found); //{id:1, name:'name1'}

let foundIndex = courses.findIndex((course) => course.name === 'name1');

console.log(foundIndex); //0