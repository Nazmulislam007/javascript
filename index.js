const today = new Date();
// checking date

const day = today.getDay();

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayIs = `Today is : ${dayList[day]}`;
console.log(todayIs);

const minute = today.getMinutes();
const second = today.getSeconds();
let hour = today.getHours();

let prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  hour = 12;
  prepand = "PM";
}

if (hour === 0 && prepand === "AM") {
  hour = 12;
  prepand = "AM";
}

console.log(`The Time: ${hour} ${prepand} : ${minute} : ${second}`);


const date = new Date();
let dd = date.getDate();
let mm = date.getMonth();
const yy = date.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

const today = `${dd} - ${mm} - ${yy}`;
console.log(today);
