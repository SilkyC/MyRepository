//Object Literal
//Rather than defining each parameter of a single body
    // let name = 'Silky';
    // let age =40;


//STYLE 1: A cleaner code practice to club multiple variables
let person = {
    name: 'Silky',
    age: 40
};

//STYLE 2: Dot Notation
person.name = 'Mrinal';
person.age = 9;

//STYLE 3: BRACKET NOTATION
//Used when we do not know the value upfront and say is user input based
let nSelection = 'name';
let aSelection = 'age';
person[nSelection] = 'Rajula';
person[aSelection] = 34;

console.log(person.name);
console.log(person.age);