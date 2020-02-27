const person = {
    name: 'Nat',
    age: 27,
};

for(let key in person){
    console.log(key, person[key]);
}

//Dot notation
const dot = person.name;

//Bracket notation
const brack = person['name'];

const colors = ['red', 'green', 'blue'];

for (let i in colors){
    console.log(i, colors[i]);
}