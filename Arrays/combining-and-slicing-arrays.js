const first = [1,2,3];
const second = [4,5,6];

const concat = first.concat(second);//[ 1, 2, 3, 4, 5, 6 ]
const slice = concat.slice(2,4); //[ 3, 4 ]

console.log(concat.slice(4,5));

console.log(concat, slice);