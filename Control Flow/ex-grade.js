//Calc the grade of the student
//based in an array that sum all de marks
//1-59: F, 60-69: D, 70-79:C, 80-89:B, 90-100: A

const marks = [80,80,50];

let total = (array) => {
	let sum = 0;
	return array.reduce((average, element)=>{
		sum += element;
		average = sum/array.length;
		return average;
	},0);
};
let getMark = (num) => {
	if(num<60){return 'F';}
	if(num<70){return 'D';}
	if(num<80){return 'C';}
	if(num<90){return 'B'}
	return 'A';
};

let calculateGrade= (array) => getMark(total(array));

console.log(calculateGrade(marks));