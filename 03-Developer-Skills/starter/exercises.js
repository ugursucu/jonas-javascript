// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK 😀
*/

/*
  A) Understanding the problem
  - Array transforming to string, separated by ...
  - What is the X days? Answer: index + 1

  - Bilgileri verilen dizilerden çek ve ekrana yazdır. 
  - Bilgileri sırayla ve verilen eleman kadar yazdırman gerek.

  B) Breaking up into sub-problems
  - Transform array into string
  - Transform each element to string with ºC
  - String needs to contain day (index + 1)
  - Add ... between elements and start and end of string
  - Log string to console

  - Bilgileri diziden çek
  - Metne yerleştir
  - Ekrana yazdır
*/

/*
const printForecast = function (arr) {
  let text = ``;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      text = text + `${arr[i]}º in ${i + 1} day, `
      continue;
    } else if (i === arr.length - 1) {
      text = text + `${arr[i]}º in ${i + 1} days.`
      continue;
    } else {
      text = text + `${arr[i]}º in ${i + 1} days, `;
    }
  }

  return text;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
*/

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = `... `;

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(str);
}

printForecast(data1);
printForecast(data2);
*/