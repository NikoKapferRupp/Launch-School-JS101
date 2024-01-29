// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let firstNumber = readline.question();

console.log("What's the second number?");
let secondNumber = readline.question();

console.log(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
  );
let operation = readline.question();

let output;
if (operation === "1") {
    // '1' represents addition
    output = Number(firstNumber) + Number(secondNumber);
} else if (operation === "2") {
    // '2' represents subtraction
    output = Number(firstNumber) - Number(secondNumber);
} else if (operation === "3") {
    // '3' represents multiplication
    output = Number(firstNumber) * Number(secondNumber);
} else if (operation === "4") {
    // '4' represents division
    output = Number(firstNumber) / Number(secondNumber);
}
  
  console.log(`The result is: ${output}`);