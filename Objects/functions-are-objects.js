function Circle(radius) {
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}

const circle = new Circle(2);

Circle.name; //"Circle"
Circle.length; //1

const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function(){
console.log('draw');
}
`);

const circle1 = new Circle1(2);

console.log(circle);
console.log(circle1);

Circle.call({},1); //This is the same as new Circle
Circle.apply({},[1]); //Pass elements in an array

