1. What is the difference between var, let, and const?

Answer: var: Old way of declaring variables. Function-scoped, can be re-declared and updated.

let: Introduced in ES6. It is block-scoped (only available inside { }). It can be updated but cannot be re-declared in the same scope. Safer than var.

const: Also block-scoped, cannot be re-assigned (but objects/arrays can still be modified).

2. What is the difference between map(), forEach(), and filter()?

Answer: map(): Creates and returns a new array by applying a function to each element. Length of the new array = original array. Example: [4,8,12].map(x=>x/2) ----> [2,4,6]

forEach(): Loops through each element and executes a function, but does not return anything (always undefined). Example: [1,2,3].forEach(x=>console.log(x)).

filter(): Creates and returns a new array containing only elements that pass a condition. Example: [1,2,3,4].filter(x=>x%2===0) → [2,4].

3. What are arrow functions in ES6?

Answer: A shorter and cleaner syntax for writing functions.
Example: Normal function: function add(a, b) { return a + b; }

Arrow function: const add = (a, b) => a + b;

4. How does destructuring assignment work in ES6?

Answer: A way to unpack values from arrays or properties from objects into separate variables.

Array: const [first, second] = [10, 20]; ---> first=10, second=20

Object: const {name, age} = {name:"Ron", age:22}; ---> name="Ron", age=22

This avoids writing repetitive code and makes extraction cleaner.

5. Explain template literals in ES6. How are they different from string concatenation?

Answer: Use backticks (``) and allow ${} for variables.

Example: let name = "Eric";
console.log(`Hello, ${name}!`);

Difference from concatenation: Easier syntax, supports multi-line strings, and interpolation without +.

Using Concatenation:
const name = "Mark";
const age = 45;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
output: My name is Mark and I am 45 years old.

Using Template Literals:
const name = "Mark";
const age = 45;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
output: My name is Mark and I am 45 years old
