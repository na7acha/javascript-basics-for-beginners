const user ={
  name: 'Aberto',
  age: 27
};
const name = 'Nat';
const age = 27;
const user2 = {
    name,
    age
};
console.log(user); //{ name: 'Aberto', age: 27 }
console.log(user2);//{ name: 'Nat', age: 27 }

//Dot notation
console.log(user2.name); //Nat
user2.name = 'Gara';
console.log(user2.name); //Gara

//Bracket notation
console.log(user['name']); //Alberto
user['name'] = 'Juan';
console.log(user['name']); //Juan

//It could be a variable
let prop = 'name';
user2[prop] = 'Rosabel';
console.log(user2.name); //Rosabel