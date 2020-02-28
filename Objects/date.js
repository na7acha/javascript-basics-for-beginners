const now = new Date(); //current day time
console.log(now);
//0 is january
const date2 = new Date(2020,4,9, 8);
console.log(date2);

now.setFullYear(2021);
console.log(now);

console.log(now.toDateString()); //Sun Feb 28 2021