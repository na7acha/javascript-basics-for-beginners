
// Factory functions
function createCircle(radius){
	return{
		radius,
		draw() {}, //It is a method
	};
};

console.log(createCircle(3));
console.log(createCircle(5));