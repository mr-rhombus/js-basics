// // Write a function that takes 2 nums and returns the max
// function maximum(num1, num2) {
//   if (num1 > num2) {
//     return num1
//   }
//   else if (num2 > num1) {
//     return num2
//   }
//   else {
//     return num1
//   }
// }
// a = maximum(1, 2)
// console.log(a);

// function maximum_v2(a, b) {
//   return (a > b) ? a : b;
// }
// console.log(maximum_v2(10,23))


// // Is a picture landscape?
// function isLandscape(w, h) {
//   return (w > h);
// }
// console.log(isLandscape(20, 15));


// // fizzBuzz
// function fizzBuzz(input) {
//   if (typeof(input) !== 'number') return NaN;
//   else if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
//   else if (input % 3 === 0) return 'Fizz';
//   else if (input % 5 === 0) return 'Buzz';
//   else return input;
// }
// console.log(fizzBuzz('blah'))
// console.log(fizzBuzz(3))
// console.log(fizzBuzz(10))
// console.log(fizzBuzz(30))
// console.log(fizzBuzz(7))

// // Speed limit
// function checkSpeed(speed) {
//   let points = 0
//   if (speed < 75) {
//     console.log('Ok');
//     return;
//   }
//   if (speed >= 75) {
//     points = Math.floor((speed - 70) / 5);
//   }
//   if (points >= 12) {
//     console.log('License suspended');
//     return;
//   }
//   console.log(points)
//   return;
// }
// checkSpeed(181);

// Even and odd
// function showNumbers(num) {
//   for (let i=0; i<=num; i++) {
//     if (i % 2 === 0) console.log(i, 'EVEN');
//     else console.log(i, 'ODD');
//   }
// }
// showNumbers(10)

// Count truthy
// function countTruthy(array) {
//   let truthy = 0;
//   for (let el of array) {
//     if (el) truthy++
//   }
//   return truthy
// }
// console.log(countTruthy([true, false, true, 1, 2, null]))

// show string properties
// function showProperties(obj) {
//   for (let el in obj) {
//     if (typeof(obj[el]) === 'string') console.log(el, obj[el]);
//   }
// }
// const movie = {
//   title: 'a',
//   releaseYear: 2017,
//   rating: 4.5,
//   director: 'b',
//   starActress: 'c',
// }
// showProperties(movie);

// sum
// function sum_(limit) {
//   let sum = 0;
//   for (let i=1; i<=limit; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) sum += i;
//   }
//   return sum;
// }
// console.log(sum_(10))

// grade
const marks = [80, 80, 50];
function calculateGrade(marks) {
  let grades = 0;
  let tot_score = 0;
  for (let grade of marks) {
    grades += 1;
    tot_score += grade;
  }
  let gpa = tot_score / grades;
  let letter_grade;
  if ((gpa >= 0) && (gpa <= 59)) letter_grade = 'F';
  else if ((gpa <= 69) && (gpa > 59)) letter_grade = 'D';
  else if ((gpa <= 79) && (gpa > 69)) letter_grade = 'C';
  else if ((gpa <= 89) && (gpa > 79)) letter_grade = 'B';
  else if (gpa > 89) letter_grade = 'A';
  else letter_grade = NaN;
  return letter_grade;
}
console.log(calculateGrade(marks));

// stars
function showStars(rows) {
  let curr_stars = '';
  for (let i=1; i<=rows; i++) {
    curr_stars += '*';
    console.log(curr_stars);
  }
}
showStars(5);

// primes
function showPrimes(limit) {
  let primes = [];
  for (i=2; i<=limit; i++) {
    if (i % 2 === 0) continue;  // not a prime
    else if (primes.length === 0) primes.push(i);  // number 3
    else {  // check nums > 3
      let isPrime = true;
      for (p of primes) {
        if (i % p === 0)
          isPrime = false;  // not a prime
          break;
      }
      if (isPrime) primes.push(i);
    }
  }
  return primes
}
console.log(showPrimes(20))
