// 1. let & const
let counter = 0;
const PI = 3.14159;

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const name = "Alice";
console.log(`Hello, ${name}! Welcome to ES6.`);

// 4. Default Parameters
function greet(user = "Guest") {
  return `Hello, ${user}`;
}

// 5. Destructuring
const person = { firstName: "Bob", age: 25 };
const { firstName, age } = person;

// 6. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 7. Rest Parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

// 8. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// 9. Promises
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(console.log);

// 10. Async/Await
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

// 11. Modules (export/import)
// In real projects: export default function ... / import ...
// Here just a placeholder comment

// 12. Optional Chaining
const user = { profile: { email: "test@example.com" } };
console.log(user?.profile?.email);

// 13. Nullish Coalescing
const value = null ?? "Default Value";
console.log(value);

// 14. Enhanced Object Literals
const x = 10, y = 20;
const obj = { x, y, sum: () => x + y };
console.log(obj.sum());
