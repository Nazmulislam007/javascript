const leapYear = (year) => {
  if ((year % 100 === 0 && year % 4 === 0) || year % 400 === 0) {
    // return console.log(`this ${year} is leap year`);
  } else {
    // return console.log(`this ${year} is not leap year`);
  }
};

leapYear(1400);

const leapYear2 = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

// console.log(leapYear2(2010));
// console.log(leapYear2(2011));
// console.log(leapYear2(2012));
// console.log(leapYear2(2013));
// console.log(leapYear2(2048));

const leapYears = (year) => {
  const time = new Date(year, 1, 29);
  if (time.getMonth() === 1) {
    console.log("this is leap year");
  } else {
    console.log("this " + year + " not a leap year");
  }
};
leapYears(2016);
leapYears(2015);
// console.log(leapYears(2014));
// console.log(leapYears(2012));
