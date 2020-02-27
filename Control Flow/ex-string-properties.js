//show all the properies like are strings
const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b'
};
showProperties = (obj) =>{
	for(let key in obj){
		if(typeof obj[key] === 'string'){
			console.log(key, obj[key]);
		}
	}
};

showProperties(movie);