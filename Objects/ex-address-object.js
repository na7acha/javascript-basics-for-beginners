//Create address with street, city and zipCode
function Address (street, city, zipCode) {
	this.street = street,
	this.city = city,
	this.zipCode = zipCode
};

let showAddress = (address) => {
	for(let key in address){
		console.log(key, address[key]);
	}
};

const ad = new Address('Calle flor','Sevilla', 32939);
let show = showAddress(ad);
console.log(show);
