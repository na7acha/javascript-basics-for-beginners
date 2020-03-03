const person = {
	firstName: 'Baute',
	lastName: 'Feo',
	get fullName() {
		return `${person.firstName} ${person.lastName}`;
	},
	set fullName(value){
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

console.log(person.fullName);
person.fullName = 'Diaz Adorna';
console.log(person);

//getters => access properties
// setters => change (mutate) them