const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second];
console.log(combined); //[1,2,3,4,5,6]
const mixed = [...first, 'a', ...second, 'b']; //[1,2,3,'a',4,5,6,'b']
console.log(mixed);