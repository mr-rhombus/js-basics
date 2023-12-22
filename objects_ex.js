// show address
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address1 = new Address('A street', 'Bville', 'CCCCCC');
// function showAddress(address) {
//   for (let key in address)
//     console.log(`${key}: ${address[key]}`);
// }
// showAddress(address1);

// factory function
function createAddress(street, city, zipCode) {
  return {
    street, city, zipCode
  }
}
let address2 = createAddress('a', 'b', 'c');
// console.log(address2);
// console.log(address1);

// object equality
let address3 = createAddress('a', 'b', 'c');

// all k/v pairs are the same for both objects
function areEqual(address1, address2) {
  for (key in address1) {
    if (address1[key] !== address2[key]) {
      return false;
    }
  }
  return true;
}

// both objects share the same memory location
function areSame(address1, address2) {
  return address1 === address2
}
// console.log(areEqual(address2, address3));
// console.log(areEqual(address2, address1));
// console.log(areSame(address2, address3));
// console.log(areSame(address2, address2));

// blog posts
// let blogPost = {
//   'title': 'Blog Post',
//   'body': 'Blog content',
//   'author': 'Bob Smith',
//   'views': 25,
//   'comments': [
//     {'author': 'Ben Jacobs', 'body': 'nice post'},
//     {'author': 'Alan Jenkins', 'body': 'this post stinks'}
//   ],
//   'isLive': true,
// }
// console.log(blogPost);

// blog post constructor function
function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}
// post1 = new BlogPost('a', 'b', 'c');
// console.log(post1);

// price raneg objects
function PriceRange(range, tooltip, min, max) {
  this.range = range;
  this.isClickable = true;
  this.isActive = false;
  this.activeColor = 'green';
  this.inactiveColor = 'gray';
  this.toolTip = tooltip;
  this.min = min;
  this.max = max;
}
lowPrice = new PriceRange('low', '$', 0, 10);
medPrice = new PriceRange('med', '$$', 10.01, 20);
highPrice = new PriceRange('high', '$$$', 20.01, 50);
console.log(lowPrice, medPrice, highPrice);
