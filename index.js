// define (and create) a JavaScript object with an object literal:
const carName = {
  name: 'valvo',
  color: 'red',
  size: '22',
  price: '1990$',
};

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};
// console.log(person['firstName']);
// console.log(person.firstName);

// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
// A method is a function stored as a property.
// In a function definition, this refers to the "owner" of the function.

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// ------ In a function, in strict mode, this is undefined. ----
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const myName = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: function () {
    return this.color();
  },
  color: function () {
    return 'red';
  },
};
// console.log(myName.eyeColor)
// console.log(myName.eyeColor())
