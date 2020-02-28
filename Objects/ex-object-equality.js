//Create two function, areEqual if their values are the same and if the areSame if they are the same array

function Address(street, city, zipcode) {
	this.street = street,
		this.city = city,
		this.zipCode = zipcode
}

let ad1 = new Address('a','b', 1);
let ad2 = new Address('c','d', 2);
let ad3 = new Address('a','b',1);

let areEqual = (ad1, ad2) => ad1.street === ad2.street && ad1.city === ad2.city && ad1.zipcode === ad2.zipcode;


console.log(areEqual(ad1, ad2)); //false
console.log(areEqual(ad1, ad1)); //true
console.log(areEqual(ad1, ad3));//true

let areSame = (ad1, ad2) => ad1 === ad2;
console.log(areSame(ad1, ad2)); //false
console.log(areSame(ad1, ad1)); //true
console.log(areSame(ad2, ad3)); //false
