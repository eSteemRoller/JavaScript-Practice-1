// let count = 1;
// while (count <= 100) {
//   console.log(count);
//   count++;
// }

// for (let i = 1; i <= 20; i++) {
//     // console.log(i+1);
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} Frontend Simplified`);
//     }
//     else if (i % 3 == 0) {
//         console.log(`${i} Frontend`);
//     }
//     else if (i % 5 == 0) {
//         console.log(`${i} Simplified`);
//     }
//     else if (i % 3 !== 0 || i % 5 !== 0) {
//         console.log(i);
//     }
// }

// let str = "Frontend Simplified";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// function convertCelsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }
// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(10));
// console.log(convertCelsiusToFahrenheit(30));

// const convertCelsiusToFahrenheit = (celsius) => {
//   return celsius * 1.8 + 32;
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.map((item) => item * 2));

// First element of array:
console.log(arr[0]);

// Last element of array:
console.log(arr[arr.length - 1]);

// Add element to the end of the array:
arr.push(11);
console.log(arr);

// Remove element from the end of the array:
arr.pop();
console.log(arr);

// Add element to the beginning of the array:
arr.unshift(0);
console.log(arr);

// Remove element from the beginning of the array:
arr.shift();
console.log(arr);

// Find index of an element in the array:
console.log(arr.indexOf(5));

// Remove element from a specific index:
arr.splice(4, 1);
console.log(arr);

// Copy an array:
let arr2 = arr.slice();
console.log(arr2);

// Merge two arrays:
let arr3 = [11, 12, 13, 14, 15];
let arr4 = arr.concat(arr3);
console.log(arr4);

// Reverse an array:
console.log(arr.reverse());

// Sort an array:
console.log(arr.sort());

// Filter an array:
console.log(arr.filter((item) => item > 5));

// Find an element in an array:
console.log(arr.find((item) => item === 5));

arr.filter(() => {
  console.log("Hello");
});

arr.filter((element) => {
  console.log(element);
});

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// [1, 2, 3, 4] Long syntax
let arr5a = arr5.filter((element) => {
  console.log(element);
  if (element < 5) {
    return true;
  }
});

console.log(arr5a);


// [1, 2, 3, 4,] Semi-simplified syntax
let arr5b = arr5.filter(element => {
  return element < 5;
  }
);
console.log(arr5b);

// [1, 2, 3, 4,] Simplified syntax
let arr5c = arr5.filter(element => element < 5);
console.log(arr5c);

let grades1 = ['A+', 'A', 'FAIL'];
let grades1filtered = grades1.filter(grade => grade !== 'FAIL');
console.log(grades1filtered);

let grades2 = ['FAIL', 'FAIL', 'B'];
let grades2filtered = grades2.filter(grade => grade !== 'FAIL');
console.log(grades2filtered);

let grades3 = ['FAIL'];
let grades3filtered = grades3.filter(grade => grade !== 'FAIL');
console.log(grades3filtered);

let grades3a = ['FAIL'];
let grades3afiltered = grades3a.filter((grade) => {
  if (grade !== 'FAIL') {
    return true;
  }
});
console.log(grades3afiltered);


let grades4 = ['A+', 'A', 'FAIL'];

for (let i = 0; i < grades4.length; i++) {
  if (grades4[i] !== 'FAIL') {
    console.log(grades4[i]);
  }
}

// Substitute old array with modified new array using for loop
let grades4goodGrades = [];

for (let i = 0; i < grades4.length; ++i) {
  if (grades4[i] !== 'FAIL') {
    grades4goodGrades.push(grades4[i]);
  }
}
console.log(grades4goodGrades);


// Modify each element in an array into a new array using map
let arr6 = [1, 4, 9, 16];

// Long syntax
let arr6a = arr6.map((element) => {
  console.log(element);
  return undefined;
});
console.log(arr6a);

// Simplified syntax
let arr6b = arr6.map(element => undefined);
console.log(arr6b);


let dollars = [1, 5, 10, 3];

// Short syntax
let dollarsToCents = dollars.map(dollar => dollar * 100);
console.log(dollarsToCents);

// Long syntax
let dollarsToCents2 = [0, 10, 20];

let dollarsToCents2a = dollarsToCents2.map((dollar) => {
  return dollar * 100;
});
console.log(dollarsToCents2a);

// Convert dollars to cents using for loop
let dollarsToCents3 = [1, 5, 10, 3];
let dollarsToCents3a = [];

for (let i = 0; i < dollarsToCents3.length; i++) {
  dollarsToCents3a.push(dollarsToCents3[i] * 100);
}
console.log(dollarsToCents3a);


// Objects (a collection of key-value pairs)

// Login example
let users1 = [
  {
    username: `JohnDoe123`,
    userFirstName: `John`,
    userLastName: `Doe`,
    email: `JohnDoe96@frontendsimplified.com`,
    password: `password123`,
    subscriptionStatus: `VIP`,
    discordId: `JohnDoe123#1234`,
    lessonsCompleted: [0, 1],
  },
];

// function login(email, password) {
//   let user = users.find((user) => user.email === email);
//   if (user.password === password) {
//     console.log(`Welcome, ${user.userFirstName}`);
//   }
//   else {
//     console.log(`Incorrect email or password`);
//   }
// }

function login(email, password) {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].email === email && users1[i].password === password) {
      console.log(`Welcome, ${users1[i].userFirstName}!`);
      return;
    }
    else {
      console.log(`Incorrect email or password`);
    }
  }
}

login(`JohnDoe96@frontendsimplified.com`, `password123`);


// let signUpForm1 = [
//   {
//     username: ``,
//     userFirstName: ``,
//     userLastName: ``,
//     email: ``,
//     password: ``,
//     subscriptionStatus: ``,
//     discordId: ``,
//     lessonsCompleted: [],
//   },
// ];

// Object exercise 1 (adding a clone of the user John Doe object to the users1 array)

function signUpForm1(user) {
  users1.push(user);
};

signUpForm1({
  username: `JohnDoe123`,
  email: `JohnDoe96@frontendsimplified.com`,
  password: 'password123',
  subscriptionStatus: `VIP`,
  discordId: `JohnDoe123#1234`,
  lessonsCompleted: [0, 1],
});

console.log(users1);