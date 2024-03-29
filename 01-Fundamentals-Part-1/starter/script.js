// Lecture 10: Values and Variables

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let Person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/

//////////////////////////////////////////////////
// Lecture 12: Data Types

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

//////////////////////////////////////////////////
// Lecture 13: let, const and var

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
*/

//////////////////////////////////////////////////
// Lecture 14: Basic Operators

/*
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//////////////////////////////////////////////////
// Lecture 15: Operator Precedence

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//////////////////////////////////////////////////
// Lecture 17: Strings and Template Literals

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Before ES6
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// After ES6
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// You can also write strings with backtrick without any variables
console.log(`Just a regular string...`);

// Before ES6
console.log("String with \n\
multiple\n\
lines");

// After ES6
console.log(`String with
multiple
lines`);
*/

//////////////////////////////////////////////////
// Lecture 18: Taking Decisions: if / else Statements

/*
// Ehliyet sınavı kontrol etmek

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// Yüzyıl hesaplama
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//////////////////////////////////////////////////
// Lecture 20: Type Conversion and Coercion

/*
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String("23"), 23);

// Type Coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

n = 2 + 3 + 4 + "5";
console.log(n);

n = "10" - "4" - "3" - 2 + "5";
console.log(n);
*/

//////////////////////////////////////////////////
// Lecture 21: Truthy and Falsy Values

/*
// 5 falsy values: 0, "", undefined, null, NaN
// We don't include "false" to the falsy values because false is false.
// The falsy values is converted to false when we attemp to convert them into a boolean.
// They aren't false but they will become when they are converted to a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED");
}
*/

//////////////////////////////////////////////////
// Lecture 22: Equality Operators: == vs. ===

/*
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// prompt("What's your favourite number?");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number.");
} else if (favourite === 9) {
  console.log("9 is also a cool number.");
} else {
  console.log("Number is not 23 or 7 or 9.");
}

if (favourite !== 23) console.log("Why not 23?");
*/

//////////////////////////////////////////////////
// Lecture 24: Logical Operators

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive...");
}
*/

//////////////////////////////////////////////////
// Lecture 26: The switch Statement

/*
const day = "Friday";

switch (day) {
  case "Monday": // day === "Monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "Tuesday":
    console.log("Prepare theory videos");
    break;

  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;

  case "Friday":
    console.log("Record videos");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day!");
    break;
}

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/

//////////////////////////////////////////////////
// Lecture 27: Statements and Expressions

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = `23 is bigger`;
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

//////////////////////////////////////////////////
// Lecture 28: The Conditional (Ternary) Operator

/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink1 = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink1);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
