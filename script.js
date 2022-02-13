function myFunction(name, time) {
  // console.log(name + ' is a good boy and he wake up at ' + time + ' AM');
}

myFunction("Nazmul", 7);
myFunction("Sojib", 6);
myFunction("Shihab", 5);

// ---------------------------------------------------------------

function myFunction() {
  return 5 * 6;
}
const a = myFunction();
// console.log(a) //output will be 30; value return;

// ---------------------------------------------------------------

function newFunction() {
  5 * 6;
}
const b = newFunction();
// console.log(b)  //output undefined because of no value return;
//this function return undefined by itself;

// console.log(x); //not exicuted because of functional scope..
function carName() {
  let x = "volvo";
  // console.log(x); // it's a functional scope;
  // var let const are function scope
}
carName();
// console.log(x);
