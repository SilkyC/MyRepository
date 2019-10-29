//Fundamental building blocks in JS
//Parameter is what we have at the time of declaration 'name' while A Argunent is the value we supply for the Paramter 'Silky'


//Performing a Task
function greet(name, lastname) {
    console.log('Good Morning ' + name + ' ' + lastname);
}

greet('Mrinal', 'Silky');
greet('Rajula');


//Calculates a value
function cube(number) {
    return number * number * number;
}

// let number = cube(3);
// console.log(number); OR

console.log(cube(2));