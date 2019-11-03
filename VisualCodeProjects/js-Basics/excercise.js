//Max of Two Numbers

let m = 45;
let n = 15;

let result = m > n ? m : n;
console.log('Bigger number is ' + result);



//Method 2
let number = max(2, 2);
console.log("Larger number is " + number);

function max(m, n) {
  if (m > n) return m;
    else
    if (m < n) return n;
        return "Both are same";
  
}
