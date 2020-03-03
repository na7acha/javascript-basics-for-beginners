// Function declaration
walk();

function walk(){
	console.log('walk');
}
//run(); //Error, could not call function before its definition

//Function expression anonymous
const run = function(){
	console.log('run');
};

//The hosting re-colocated the function before the js