//#1 Trying to flip values by swapping variables

let A = 'red';
let B = 'blue';

let X = A;
A = B;
B = X;

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
for (let i =1; i <= 5; i++) { //initialize and increment expression
  console.log('Hello World', i);
}
