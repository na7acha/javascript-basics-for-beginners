//Constructor
function Address(street, city, zipcode) {
	this.street = street,
	this.city = city,
	this.zipCode = zipcode
}
//Factory
let createAddress = (street, city, zipcode) => {
	return {
		street,
		city,
		zipcode
	}
};

let ad1 = new Address('Calle larios', 'malaga', 323232);
let ad2 = createAddress('Calle pañuelo', 'Córdoba', 123456);

console.log(ad1, ad2);