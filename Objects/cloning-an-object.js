const circle = {
	radius: 1,
	draw(){
		console.log('draw');
	}
};

const another = {};

//OLD METHOD
for(let key in circle){
	another[key] = circle[key];
}

another['radius'] = circle['radius'];

console.log(another);

//ES6 METHOD
const newCircle = Object.assign({}, circle);
console.log(newCircle);

const param = Object.assign({
	color: 'green'
}, circle);
console.log(param);

//OTHER METHOD
const spreadMethod = {...circle};
console.log(spreadMethod);