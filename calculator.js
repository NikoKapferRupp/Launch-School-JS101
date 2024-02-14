const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let firstNumber = readline.question();

while (invalidNumber(firstNumber)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  firstNumber = readline.question();
}

prompt("What's the second number?");
let secondNumber = readline.question();

while (invalidNumber(secondNumber)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  secondNumber = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1,2,3, or 4.");
  operation = readline.question();
}

let output;
switch (operation) {
  case '1': // '1' represents addition
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case '2': // '2' represents subtraction
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case '3': // '3' represents multiplication
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case '4': // '4' represents division
    output = Number(firstNumber) / Number(secondNumber);
    break;
}

prompt(`The result is: ${output}`);