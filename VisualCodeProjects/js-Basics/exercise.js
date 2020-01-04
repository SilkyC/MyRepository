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