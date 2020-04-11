//#4 Infinite loop (Do not unleash the k9s below as they could tear apart the browser)
// let k = 0;
// while (k < 5) {
//  console.log(k);
//  k++;
// }

//#6 Break and continue
let l = 0;
while (l <= 10) {
    // if (l === 5) break; //breaks the loop
    if (l % 2 === 0) {
        l++;
        continue; //Legacy... Jump to next iteration
    }

    console.log(l);
    l++;
}