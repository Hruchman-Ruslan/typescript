// Js

// function greet(person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// const checkPerson = { firstName: "John", lastName: "Doe" };

// console.log(greet(checkPerson)); // "Hello, John Doe"

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Ts
type Person = {
  firstName: string;
  lastName: string;
};

function greet(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

export default greet;
