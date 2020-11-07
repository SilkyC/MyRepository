let o = 1;

//Relational Operator
console.log(o > 0);
console.log(o >= 1);
console.log(o < 1);
console.log(o <= 1);

//Equality Operator
console.log(o === 1); //Strict Equality Operator (Type + Value)
console.log('1' === 1); //String !== Number

console.log(o == 2); //Loose Equality Operator (Only Value)
console.log('2' == 2); //String == Number
console.log(true == 2);

console.log(o !== 2);


//Ternary or Conditional Operator
// If a Customer has more than 100 points
// they are 'platinum' customer, otherwise,
// they are a 'gold' customer

let points = 110;
let type = points > 100 ? 'platinum' : 'gold';

console.log(type);