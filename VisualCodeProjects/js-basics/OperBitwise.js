// Hardly ever used in practical scenarios

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2); //Bitwise OR operation
// 1 = 00000001
// 2 = 00000010
// R = 00000011


console.log(1 & 2); //Bitwise AND operation
// 1 = 00000001
// 2 = 00000010
// R = 00000000

//Example of Usage - UAC - Read, Write, Execute
// 00000100
// 00000110
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; //Initialization and give permission
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

//Check permission
let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);