// todo problem: 06 find the leapyear
// const leapYear = (year) => {
//   if ((year % 100 === 0 && year % 4 === 0) || year % 400 === 0) {
//     return console.log(`this ${year} is leap year`);
//   } else {
//     return console.log(`this ${year} is not leap year`);
//   }
// };

// leapYear(1400);

// const leapYear2 = (year) => {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// };

// console.log(leapYear2(2010));
// console.log(leapYear2(2011));
// console.log(leapYear2(2012));
// console.log(leapYear2(2013));
// console.log(leapYear2(2048));

// const leapYears = (year) => {
//   const time = new Date(year, 1, 29);
//   if (time.getMonth() === 1) {
//     console.log("this is leap year");
//   } else {
//     console.log("this " + year + " not a leap year");
//   }
// };
// leapYears(2016);
// leapYears(2015);
// console.log(leapYears(2014));
// console.log(leapYears(2012));

// todo problem:7. find 1st January is being a Sunday between 2014 and 2050.

// for (let year = 2014; year <= 2050; year++) {
//   const time = new Date(year, 0, 1);
//   if (time.getDay() === 0) {
//     console.log(`first january is being sunday ${year}`);
//   } else {
//     console.log("false");
//   }
// }

//todo problem: 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// const num = Math.ceil(Math.random() * 10);

// const gnum = prompt("Guess the number between 1 to 10");

// if (gnum == num) {
//   alert("Great job");
// } else {
//   alert("Oops the number is " + num + "");
// }

// todo problem: 9. Write a JavaScript program to calculate number of days left until next Ramadan.

const time = new Date();
let ramadan = new Date(time.getFullYear(), 3, 4);

if (time.getMonth() > 3) {
  ramadan.setFullYear(ramadan.getFullYear() + 1);
}

const one_day = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((ramadan.getTime() - time.getTime()) / one_day);

console.log("number of days left " + daysLeft);
