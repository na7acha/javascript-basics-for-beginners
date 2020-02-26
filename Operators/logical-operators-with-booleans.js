// Logical and, or and not
//LOGICAL AND &&, returns TRUE if both are TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; //true

console.log(eligibleForLoan);
//LOGICAL OR ||, returns TRUE if one of both are TRUE
let badCreditScore = false;
eligibleForLoan = highIncome || badCreditScore;
console.log(eligibleForLoan); //true

//LOGICAL NOT (!)
eligibleForLoan = !badCreditScore;
console.log(eligibleForLoan); //true
