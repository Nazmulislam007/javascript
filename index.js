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
