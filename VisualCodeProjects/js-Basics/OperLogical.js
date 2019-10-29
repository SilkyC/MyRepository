// Logicl AND (&&)
// Returns TRUE if both operands are TRUE
//With Booleans

console.log(true && true);

console.log(false && true);

console.log(false && false);


//Example of Bank Loan sanction

let highIncome = false;
let gooCreditScore = false;
let loanEligibility = highIncome || gooCreditScore;

console.log('Eligible', loanEligibility);

let appliactionRefused = !loanEligibility;
console.log('Application Refused', appliactionRefused);


//With Non-Booleans

// Falsy (not boolean false)
// undefined
// null
// 0
// false (boolean false)
// ''
// NaN

// anything that is not flase is --> truthy

let resultT = false || true;
console.log(resultT); //true

let resultB = false || 'Silky';
console.log(resultB); //"Silky"

let result1 = false || 1;
console.log(result1); //1

let result2 = false || 1 || 2; //Evaluation stops at first success, called short circuiting
console.log(result2); //1

let userColor = 'red';
let defauktColor = 'black'
let currentColor = userColor || defaultColor;

console.log(currentColor);

