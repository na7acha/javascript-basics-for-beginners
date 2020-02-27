//Speed Limit = 70 if speed <=70 return Ok
// every 5 km --> 1 point if (75) --> 1 point
//Math.floor(1.3)=1
// 80 --> 2 points
//more 12 points --> License suspended

let checkSpeed = (speed) => {
	const limit = 70;
	const maxPoints = 12;
	const kmPoints = 5;
	const points = Math.floor((speed-limit)/kmPoints);
	if(limit+kmPoints>speed){
		return 'Ok';
	}
	return points>maxPoints?'License suspended':points+' point';
};

checkSpeed(71); //Ok
checkSpeed(80); //points 2
checkSpeed(200); //license suspended