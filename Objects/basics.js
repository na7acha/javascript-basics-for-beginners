const circle = {
	radius: 1,
	location: {
		x:1,
		y:1
	},
	isVisible: true,
	draw: () => {console.log('draw')}, //It is a method
	move: () => {}
};

console.log(circle.draw());