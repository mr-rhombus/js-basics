// if...else
let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon!');
}
else {
  console.log('Good evening')
}

// switch...case
let role;
switch (role) {
  case 'guest':
    console.log('Guest user');
    break;
  case 'moderator':
    console.log('Moderator');
    break
  default:
    console.log('Unknown user');
}

// for
for (let i=0; i<5; i++) {
  console.log('Hello world')
}

// while
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// do-while - statements are always executed at least once
let j = 7;
do {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
} while (j <= 5);

// for-in
const person = {
  name: 'Max',
  age: 25
}

for (let key in person) {
  console.log(key, ': ', person[key]);
}

const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index, colors[index]);
}

// for-of
for (let val of colors) {
  console.log(val);
}

// break and continue
let k = 0;
while (k <= 10) {
  // if (k===5) break;
  if (k % 2 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}
