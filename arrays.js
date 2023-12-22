// adding elements
// const numbers = [3, 4];
// numbers.push(5, 6);
// numbers.unshift(1, 2);
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);


// finding elements (primitives)
// const numbers = [1,2,3,4];
// console.log(numbers.indexOf(1));
// const nums2 = [1,2,3,1];
// console.log(nums2.lastIndexOf(1));
// console.log(numbers.includes(1));
// console.log(nums2.indexOf(1, fromIndex=2))


// finding elements (objects)
// const courses = [
//   {id: 1, name: 'a'},
//   {id: 1, name: 'b'},
// ];


// console.log(courses.includes({id: 1, name: 'a'}));
// const course_b = courses.find(function(element) {
//   return element.name === 'b';
// });
// console.log(course_b);
// console.log(courses);
// const course_c = courses.find(function(element) {
  //   return element.name === 'c';
// });
// console.log(course_c);
// console.log(
//   courses.findIndex(function(course) {
//     return course.name === 'a';
//   })
// )


// arrow functions
// const courses = [
//   {id: 1, name: 'a'},
//   {id: 1, name: 'b'},
// ];
// const foundCourse = courses.find(course => {
//   return course.name === 'a';
// })
// console.log(foundCourse);
// const foundCourse2 = courses.find(course => course.name === 'a');
// console.log(foundCourse2);


// removing elements
// const nums = [1,2,3,4,5];

// // end
// const last = nums.pop();
// console.log('nums', nums, 'last', last);

// // beginning
// const first = nums.shift();
// console.log('nums', nums, 'first', first);

// // middle
// const middle = nums.splice(1, 1);
// console.log('nums', nums, 'middle', middle);


// emptying an array

// const nums = [1,2,3,4];

// solution 1
// nums.length = 0;
// console.log(nums);

// solution 2
// nums.splice(0, nums.length);
// console.log(nums);


// combining and slicing arrays
// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);
// console.log('combined', combined);

// const sliced = combined.slice(2, 4);
// console.log('sliced', sliced);

// const firstObj = [{id: 1}];
// const combinedObj = firstObj.concat(second);
// console.log('combined obj', combinedObj);


// spread operator
// const first = [1,2,3];
// const second = [4,5,6];
// const combined = [...first, ...second];
// console.log('spread combined', combined);
// const copy = [...combined];
// console.log('copy', copy);


// iterating through an array
// const nums = [1,2,3];
// nums.forEach((number, ix) => console.log(ix, number));


// joining arrays
// const nums = [1,2,3];
// const joined = nums.join(',');
// console.log('comma joined', joined);

// const message = 'this is my first message';
// const split = message.split(' ');
// console.log('split', split);

// const joined2 = split.join('-');
// console.log('joined again', joined2);


// sorting
// const nums = [2,3,1];
// const sorted = nums.sort();
// console.log('sorted', sorted);

// const reversed = nums.reverse();
// console.log('reversed', reversed);

// const courses = [
//   {id: 1, name: 'node.js'},
//   {id: 2, name: 'JS'},
// ];
// const sortedCourses = courses.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// })
// console.log('sorted courses', sortedCourses);


// testing elements of an array
// const nums = [1,2,3];
// console.log('all vals +ve:', nums.every(value => value > 0))  // are all vals +ve?
// const nums2 = [-1,2,3];
// const somePositive = nums.some(value => value >= 0);
// console.log('some +ve:', somePositive);


// filtering
// const nums = [1,-1,2,3];
// const positiveNums = nums.filter(value => value >= 0);
// console.log('+ve nums:', positiveNums);


// mapping
// const nums = [1,-1,2,3];
// const positiveNums = nums.filter(value => value >= 0);
// const items = positiveNums.map(n => '<li>' + n + '</li>');
// console.log(items);
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// const items2 = positiveNums.map(n => ({value: n}));
// console.log(items2);


// reducing
const nums = [1,-1,2,3];
let sum = 0;
for (let n of nums)
  sum += n;
console.log('sum:', sum);

const sum2 = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log('sum2:', sum2);
