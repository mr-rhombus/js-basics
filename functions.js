// declarations vs expressions
// declaration
// function walk() {
//   console.log('walk');
// }

// // expression
// let run = function() {
//   console.log('run');
// }

// walk();
// run();

// let move = run;
// move();


// hoisting
// a();
// // during execution, functions are "hoisted" to the top of the script and executed first
// function a() {
//   console.log('a');
// }

// b();
// const b = function() {
//   console.log('b');
// }


// parameters
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(1, 2));


// rest operator
// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }
// console.log(sum(1,2,3,4,5,10));


// default params
// function interest(principal, rate = 3.5, years = 5) {
//   return principal * rate / 100 * years
// }
// console.log(interest(10000));


// getters and setters
// const person = {
//   firstName: 'Max',
//   lastName: 'Diamond',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set fullName(value) {
//     if (typeof value !== 'string')
//       throw new Error('Please enter a string as the full name');
//     const parts = value.split(' ');
//     if (parts.length !== 2)
//       throw new Error('Enter a first and last name');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// // person.fullName = 'Bob Jones';
// // console.log(person);


// // error handling
// try {
//   person.fullName = '';
// } catch (e) {
//   console.log(e);
// }


// let vs var
// let x = 0;

// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// start();


// this keyword
// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

// video.play();

function playVideo() {
  console.log(this);
}
playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video('b');

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach( tag => {
      console.log(this.title, tag);
    })
  }
}
video.showTags();
