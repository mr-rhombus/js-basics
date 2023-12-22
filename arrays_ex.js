// array from range
// function arrayFromRange(min, max) {
//   const arr = [];
//   for (let i=min; i<=max; i++)
//     arr.push(i);
//   return arr;
// }
// console.log(arrayFromRange(-10, -4));


// includes
// function includes(array, searchElement) {
//   for (let el of array) {
//     if (el === searchElement)
//       return true;
//   }
//   return false;
// }
// console.log(includes([1,2,3,4], 1))
// console.log(includes([1,2,3,4], 5))


// except
// const nums = [1,1,2,3,4];
// function except(array, excluded) {
  //   return array.filter(n => !excluded.includes(n));
  // }
  // console.log(except(nums, [1,2,5]));
  
  
  // move element
  // const nums = [1,2,3,4];
  // function move(array, index, offset) {
  //   // is this combo legal?
  //   const length = array.length;
  //   const toMove = array.splice(index, 1)[0];
  //   let legal = true;
  //   if (offset > 0) {
  //     legal = length - (index + 1 + offset) > 0;
  //   } else if (offset < 0) {
  //     legal = (index + 1 + offset) > 0;
  //   }
  //   if (!legal) {
  //     console.error('Invalid offset.');
  //     return
  //   }
  //   array.splice(offset + index, 0, toMove);
  //   return array;
  // }
  // console.log(move(nums, 3, -3));


// count occurrences
// function countOccurrences(array, searchElement) {
//   filtered = array.filter(n => n === searchElement);
//   return filtered.length
// }
// console.log(countOccurrences([1,1,2,3,4], 0));


// get max
// function getMax(array) {
//   return array.sort().pop()
// }
// console.log(getMax([4,2,3,1]));
  

// movies
const movies = [
  { title: 'a', year: 2018, rating: 4.5},
  { title: 'b', year: 2018, rating: 4.7},
  { title: 'c', year: 2018, rating: 3.0},
  { title: 'd', year: 2017, rating: 4.5},
]

const filtered = movies.filter(
  movie => (movie.year === 2018) && (movie.rating > 4)
);
filtered.sort((a, b) => {
  const titleA = a.title;
  const titleB = b.title;
  if (titleA > titleB) return -1;
  if (titleA < titleB) return 1;
  return 0;
});

titles = filtered.map(movie => movie.title);

console.log(titles);
