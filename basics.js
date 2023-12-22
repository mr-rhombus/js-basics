console.log('Hello World');

// Variables
let name = 'Max';
console.log(name);

// Constants - immutability
const interestRate = 0.3;
console.log(interestRate);

// Primitive Types - str, num, bool, underined, null
let name2 = 'Max';
let age = 30;
let isApproved = true;
let firstName = undefined;
let lastName = null;  // Used when we want to clear the value of a var

// Dynamic Types
console.log(typeof(name2));
name2 = 2;
console.log(typeof(name2))

// Reference Types
// Object
let name3 = 'Max';
let age3 = 25;
let person = {
    'name': name3,
    'age': age3
};
console.log(person)
person.name = 'Max2'
console.log(person.name)

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);

// Functions
function greet(name) {  // param
    console.log('Hello ' + name);
}
greet('shley');  // arg

function square(num) {
    return num*num;
}
num_sq = square(2);
console.log(num_sq)


