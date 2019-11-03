//#1 Trying to flip values by swapping variables

let A = 'red';
let B = 'blue';
let C = null;

C = A;
A = B;
B = C;

console.log(A);
console.log(B);

//#2.1 If...else CONDITIONAL STATEMENTS
//If Hour is between 6AM to 12PM: Good Morning!
//If it is betweeen 12PM and 6PM: Good Afternoon!
//Otherwise: Good evening!

let hour = 23; //24Hr for simpliicty

if (hour >= 6 && hour < 12) { //(condition)
    console.log('Good Morning'); //statement
}
else if (hour >= 12 && hour < 18) { //(anothercondition)
    console.log('Good Afternoon');
}
else //if (hour >= 18 && hour < 21) //yetAnothercondition or end ...
    console.log('Good Evening');



//#2.2 Switch case CONDITIONAL STATEMENTS
let role;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unkown User');
}


//#3 For loop
for (let i =1; i <= 5; i++) { //initialize and scope is within the {}
  console.log('Hello World', i);
}


//#3 While loop (Declaration is external)
// for (let i = 0; 9 <= 5; i++) {
//     if (i % 2 !== 0) console.log(i); //Odd numbers
// }

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}


//#4 Do...while loop (Always executed ateleast one time even for false condition)
// let j = 0;
// while (j <= 5) {
//     if (j % 2 !== 0) console.log(j);
//     j++;
// }
let j = 9;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 9);


//#4 & #6 For loops refer loops.js

//#5.1 For...in - Arrays
const subject = {
    name: 'Silky',
    age: 40
};

for (let key in subject)
    console.log(key, subject[key]);

// //Dot Notation
// person.name

// // Bracket Notation when input at the start of execution is unkown
// person['name']

const colors = ['Red', 'Green', 'Blue'];

for (let index in colors)
    console.log(index, colors[index]);


//#5.2 For...of - Arrays. new in esversion 6
for (let pigment of colors)
    console.log(pigment);

