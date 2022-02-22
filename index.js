const leapYear = (year) => {
  if ((year % 100 === 0 && year % 4 === 0) || year % 400 === 0) {
    return console.log(`this ${year} is leap year`);
  } else {
    return console.log(`this ${year} is not leap year`);
  }
};

leapYear(1400);

const leapYear2 = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

console.log(leapYear2(2010));
console.log(leapYear2(2011));
console.log(leapYear2(2012));
console.log(leapYear2(2013));
console.log(leapYear2(2048));
