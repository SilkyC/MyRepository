let n = 1;

//Relational Operator
console.log(n > 0);
console.log(n >= 1);
console.log(n < 1);
console.log(n <= 1);

//Equality Operator
console.log(n === 1); //Strict Equality Operator (Type + Value)
console.log('1' === 1); //String !== Number

console.log(n === 1); //Loose Equality Operator (Only Value)
console.log('1' === 1);
console.log(true === 1);

console.log(n !== 1);


//Ternary or Conditional Operator
// If a Customer has more than 100 points
// they are 'platinum' customer, otherwsie,
// they are a 'gold' customer

let points = 110;
let type = points > 100 ? 'platinum' : 'gold';

console.log(type);
