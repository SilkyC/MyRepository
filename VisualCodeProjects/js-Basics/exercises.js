//Max of Two Numbers
let m = 45;
let n = 15;

let result = (m > n) ? m : n;
console.log("Bigger number is " + result);


//Method 2
let number = max(20, 2);
console.log('Larger number is ' + number);

function max(m, n) {
    return (m > n) ? m : n;
    //   if (m > n) return m;
    //   return n;
}


//Landscape or Portrait
let orientation = isLandScape(300, 200);
console.log('Landscape mode : ' + orientation);

function isLandScape(width, height) {
    return (width > height);
}

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 & 5 => FizzBuzz
//Non-divisible by both numbers => same input
//Not a number ==> Not a number

const declare = fizzBuzz(15);
console.log(declare);

function fizzBuzz(insert) {
    if (typeof insert !== 'number')
        return NaN;

    if ((insert % 3 === 0) && (insert % 5 === 0))
        return 'FizzBuzz';

    if (insert % 3 === 0)
        return 'Fizz';

    if (insert % 5 === 0)
        return 'Buzz';

    return insert;
}