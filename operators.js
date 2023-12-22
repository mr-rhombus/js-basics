// Arithmetic
let x = 10;
let y = 3;
// Increment
console.log(x++);  // print then inc
console.log(++x);  // inc then print
// Decrement
console.log(x--);

// Assignment
// let x = 10;
x++;
x = x + 1;
x += 5;

// Comparison
console.log(x > 0);
x >= 1;
let z = 1;
console.log(z === 1);  // strict equality operator
console.log(z !== 1);
console.log('1' == 1);  // loose equality operator
console.log(true == 1);

// Ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical
console.log('true && true: ' + (true && true));
console.log('true || false: ' + (true || false));
console.log('!true: ',  !true);
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise
console.log(1 | 2);  // bitwise or
console.log(1 & 2);  // bitwise and
