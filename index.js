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

// const time = new Date();
// let ramadan = new Date(time.getFullYear(), 3, 4);

// if (time.getMonth() > 3) {
//   ramadan.setFullYear(ramadan.getFullYear() + 1);
// }

// const one_day = 1000 * 60 * 60 * 24;
// const daysLeft = Math.ceil((ramadan.getTime() - time.getTime()) / one_day);

// console.log("number of days left " + daysLeft);

// todo problem: 10; Calculate multiplication and division of two numbers
// check the index.html file

// const firstNum = document.querySelector(".firstNum");
// const secondNum = document.querySelector(".secondNum");
// const multiply = document.querySelector(".multiply");
// const divided = document.querySelector(".divided");

// multiply.addEventListener("click", (e) => {
//   const firstNumVal = firstNum.value;
//   const secondNumVal = secondNum.value;
//   console.log(firstNumVal * secondNumVal);
// });

// divided.addEventListener("click", (e) => {
//   const firstNumVal = firstNum.value;
//   const secondNumVal = secondNum.value;
//   console.log(firstNumVal / secondNumVal);
// });

// todo problem: 11; Convert temperatures to and from celsius, fahrenheit

// rule 1 : C = (5 * (F - 32)) / 9;
// rule 2 : F = (9C + (32 * 5)) / 5;

// const celcius = (cel) => {
//   F = (9 * cel + 32 * 5) / 5;
//   console.log(F);
// };
// celcius(20);

// const fahren = (fah) => {
//   C = (5 * (fah - 32)) / 9;
//   console.log(C);
// };
// fahren(68);

// todo problem: 12;  Get the website URL (loading page)

// alert(document.URL);

// todo problem: 13; Create a variable using a user-defined name

// const user_defined = "abcd";
// const n = 120;

// this[user_defined] = n;
// console.log(this[user_defined]);

// todo problem: 14; Get the extension of a filename;

// const filename = "hello.html";
// const file = "abc.php";

// console.log(filename.split(".").pop());
// console.log(file.split(".").pop());

// todo interview question: 1; https://www.youtube.com/watch?v=twusETr-r9Y about setTimeout and setInterval which is event loop concept based.

// let a = true;
// let c = 0;

// setTimeout(() => {
//   a = false;
// }, 2000);

//// ? it stop after 2000 second but code don't free yet
// setInterval(() => {
//   if (a) {
//     console.log(c++);
//   }
// }, 200);

//// ? it's get printed for unlimited time..
// while (a) {
//   console.log(c++);
// }

// let a = true;
// let c = 0;

// const id = setInterval(() => {
//   console.log(c++);
// }, 200);

// setTimeout(() => {
//   clearInterval(id);
// }, 2000);

// todo interview question: 2; https://www.youtube.com/watch?v=eBTBG4nda2A . closures setTimeout..

// ? output 6 6 6 6 6 6; var store data. var is a global scope
// function y() {
//   for (var j = 0; j <= 5; j++) {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   }
// }
// y();

//? output 0 1 2 3 4 5; let print a copy after execute once of loop because of block scope
// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// ?with closures -- and var

function x() {
  for (var i = 1; i <= 5; i++) {
    function closures(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    closures(i);
  }
  console.log("async");
}

x();
