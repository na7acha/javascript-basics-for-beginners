//Stars function by rows --> row 1 --> 1 start; row 2 --> 2 stars...

let showStars = (rows) => {
	for(let i=1; i<=rows; i++){
		let star = '*';
		console.log(star.repeat(i));
	}
};

console.log(showStars(5));

//Solution in udemy
function showStartsUdemy(rows){
	for (let row=1; row <=rows; row++){
		let pattern = '';
		for (let i= 0; i <row; i++){
			pattern += '*';
		}
		console.log(pattern);
	}
}