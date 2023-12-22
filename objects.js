// basics
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function() {
//     console.log('draw');
//   }
// }

// circle.draw();

// factory functions
// function createCircle(radius, location) {
//   return {
//     radius,
//     location,
//     isVisible: true,
//     draw() {
//       console.log('draw');
//     }
//   };
// }
// const circle1 = createCircle(1, [1,1])
// console.log(circle1)

// constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle1 = new Circle(1);
// console.log(circle1);

// dynamic objects
// const circle = {
//   radius: 1
// }
// circle.color = 'yellow';
// circle.draw = function() {}
// delete circle.color;
// delete circle.draw;
// console.log(circle);

// constructor
// console.log(circle1.constructor)

Circle.call({}, 1);  // same as `const another = new Circle(1);

// enumerating
const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}

// for (let key in circle)
//   console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//   console.log(key, circle[key]);

// for (let el of Object.entries(circle))
//   console.log(el);

// cloning an object
const anotherCircle = {};

// for (let key in circle)
//   anotherCircle[key] = circle[key];
// console.log(anotherCircle);
// anotherCircle.draw();

// const another = Object.assign({}, circle);
// console.log(another);

// const another = Object.assign({
//   color: 'yellow'
// }, circle);
// console.log(another);

const another = {...circle};  // spread operator
// console.log(another);

// Math
// console.log(Math.PI)
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// String
// const message = 'hi';
// console.log(message.length);
// console.log(message[0]);
// console.log(message.includes('not'));
// console.log(message.startsWith('h'));
// console.log(message.indexOf('i'));
// console.log(message.replace('i', 'ello'));

// template literals
// let name = 'Max';
// const message = `This is my
// first message, thanks for
// watching ${name}!`;
// console.log(message);

// date
const now = new Date();
const date1 = new Date('May 11 2019 09:00');
const date2 = new Date(2018, 4, 11, 9);
console.log(now.toDateString());
console.log(now.toISOString());
