const READLINE = require('readline-sync');
const LOAN_CALCULATOR_MESSAGES = require('./loan_calculator_messages.json');
const MONTHS_IN_A_YEAR = 12;
const FORMATTER_US = new Intl.NumberFormat('en-US', { // format for dollar
  style: 'currency',
  currency: 'USD',
});
const FORMATTER_DE = new Intl.NumberFormat('de-DE', { // format for euro
  style: 'currency',
  currency: 'EUR',
});

READLINE.setDefaultOptions({prompt: '=> '}); // sets the default prompt for readline-sync to "=> "

let language;
let currencyFormat;
getLanguage();
// ask for language

prompt(LOAN_CALCULATOR_MESSAGES[language]['welcome']); // welcome message

let loanAmount = getValidFloat(LOAN_CALCULATOR_MESSAGES[language]['loanAmount']); // asks user for the loan amount and accepts only positive float numbers

let monthlyIntrestRate = getValidFloat(LOAN_CALCULATOR_MESSAGES[language]['monthlyIntrestRate']) / 100 / 12; // asks user for the monthly intrest rate and accepts only positive float numbers

prompt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationFormat']); // asks user for preferred time input format

let loanDurationFormat = Number(READLINE.keyIn('=> ', {limit: [1, 2]})); // limits the input to "1" or "2"
let loanDurationMonths = getLoanDuration(loanDurationFormat); // asks user for preferred time imput format

let monthlyPayment = loanAmount * (monthlyIntrestRate / (1 - Math.pow((1 + monthlyIntrestRate), (-loanDurationMonths)))); // calculates the monthly payment

summary(); // logs the summary

prompt(LOAN_CALCULATOR_MESSAGES[language]['thanks']); // end message

// ------------------------------- functions -------------------------------

function prompt(string) { // logs given string with prompt
  console.log('=> ' + string);
}

function getLanguage() {
  prompt('Please choose your language:');

  switch (Number(READLINE.keyIn('=> 1) Englisch 2) Deutsch: \n=> ', {limit: [1, 2]}))) { // assigns the
    case 1:
      language = 'en';
      currencyFormat = FORMATTER_US;
      break;
    case 2:
      language = 'de';
      currencyFormat = FORMATTER_DE;
      break;
    default:
      language = 'en';
      currencyFormat = FORMATTER_US;
      break;
  }
}

function getValidFloat(question) { // gets user input and returns it if it's a float number
  prompt(question);
  let float = Number(READLINE.prompt());

  while (isNaN(float) || float <= 0) {
    prompt(LOAN_CALCULATOR_MESSAGES[language]['invalidInput']);
    prompt(question);
    float = Number(READLINE.prompt());
  }
  return float;
}

function getValidInt(question, validFirstNum) { // gets user input and valid first number and returns it if it's a float number
  prompt(question);
  let int = Number(READLINE.prompt());

  while ( !Number.isInteger(int) || int < validFirstNum) {
    prompt(LOAN_CALCULATOR_MESSAGES[language]['invalidInput']);
    prompt(question);
    int = Number(READLINE.prompt());
  }
  return int;
}

function getLoanDuration(loanDurationFormat) {
  let months;
  switch (loanDurationFormat) { //

    case 1:
      months = getValidInt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationYears'], 1) * MONTHS_IN_A_YEAR;
      months += getValidInt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationMonths'], 0);
      break;

    case 2:
      months = getValidInt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationMonths'], 1);
      break;
  }
  return months;
}

function summary() {  // prints out a neat summary
  prompt('+--------------------------------------+');
  prompt(`|${stringPadding('~~~~~~~~~~~~~~~~~')}|`);
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['summary'])}|`);
  prompt(`|${stringPadding('~~~~~~~~~~~~~~~~~')}|`);
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['summaryLoanAmount'])}|`);
  prompt(`|${stringPadding(loanAmount)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['monthlyPayment'])}|`);
  prompt(`|${stringPadding(monthlyPayment)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['loanTermMonths'])}|`);
  prompt(`|${stringPadding(loanDurationMonths.toString())}|`);
  prompt('|--------------------------------------|');
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['totalInterest'])}|`);
  prompt(`|${stringPadding((monthlyPayment * loanDurationMonths) - loanAmount)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${stringPadding(LOAN_CALCULATOR_MESSAGES[language]['totalPayment'])}|`);
  prompt(`|${stringPadding(monthlyPayment * loanDurationMonths)}|`);
  prompt('+--------------------------------------+');
}

function stringPadding(input) { //calculates the padding on both sides of the string
  if (typeof input === 'number') {
    input = (currencyFormat.format((Math.round(input * 100)) / 100));
  }

  let limit = Math.round(((38 - input.length) / 2) + input.length);

  input = input.padStart(limit, ' ');
  input = input.padEnd(38, ' ');

  return input;
}

