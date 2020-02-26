let selectedColors = ['Green', 'Blue', 'Pink'];
console.log(selectedColors); // [ 'Green', 'Blue', 'Pink' ]
console.log(typeof selectedColors); // Object
//It has an index and start in 0
console.log(selectedColors[0]); //Green
console.log(selectedColors[2]); //Pink
//Add an new element
selectedColors[3] = 'Red';
console.log(selectedColors); //[ 'Green', 'Blue', 'Pink', 'Red']
//Length properties
console.log(selectedColors.length);//4