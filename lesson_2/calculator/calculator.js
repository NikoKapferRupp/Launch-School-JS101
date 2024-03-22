const READLINE = require('readline-sync');
const CALCULATOR_MESSAGES = require('./calculator_messages.json');


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function languageChooser() {
  let languageNum = READLINE.keyIn('1) Englisch 2) Deutsch ' , (1, 2));
  
  switch (languageNum) {
    case '1':
      return 'en'
      break;
  
    case '2':
      return 'de'
      break;
  
    default:
      return 'en'
      break;
  }
}

prompt('Please choose your language: ');

let language = languageChooser();

prompt(CALCULATOR_MESSAGES[language]['welcome']);

while(true) {
    prompt(CALCULATOR_MESSAGES[language]['firstNumber']);
  let firstNumber = READLINE.question();

  while (invalidNumber(firstNumber)) {
    prompt(CALCULATOR_MESSAGES[language]['invalidNumber']);
    firstNumber = READLINE.question();
  }

  prompt(CALCULATOR_MESSAGES[language]['secondNumber']);
  let secondNumber = READLINE.question();

  while (invalidNumber(secondNumber)) {
    prompt(CALCULATOR_MESSAGES[language]['invalidNumber']);
    secondNumber = READLINE.question();
  }

  prompt(CALCULATOR_MESSAGES[language]['operation']);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(CALCULATOR_MESSAGES[language]['invalidOption']);
    operation = READLINE.question();
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

  prompt(CALCULATOR_MESSAGES[language]['result'] + output);

  if (!READLINE.keyInYN(CALCULATOR_MESSAGES[language]['playAgain'])) {break};
  };

