const circle = {
	radius: 1,
}; 

circle.color = 'yellow';
circle.draw = () => {};

console.log(circle);

delete circle.radius;
console.log(circle);