const READLINE = require('readline-sync');
const LOAN_CALCULATOR_MESSAGES = require('./loan_calculator_messages.json');
const MONTHS_IN_A_YEAR = 12;
const FORMATTER_US = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const FORMATTER_DE = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

READLINE.setDefaultOptions({prompt: '=> '});

let language;
let currencyFormat;

prompt('Please choose your language:');

switch (Number(READLINE.keyIn('=> 1) Englisch 2) Deutsch: \n=> ', {limit: [1, 2]}))) {
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

prompt(LOAN_CALCULATOR_MESSAGES[language]['welcome']);
prompt(LOAN_CALCULATOR_MESSAGES[language]['loanAmount']);

let loanAmount = validNumberFloat();

prompt(LOAN_CALCULATOR_MESSAGES[language]['monthlyIntrestRate']);

let monthlyIntrestRate = validNumberFloat('=> Please enter the annual intrest rate in %: ') / 100 / 12;

prompt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationFormat']);

let loanDurationFormat = READLINE.keyIn('=> ', {limit: [1, 2]}); // limits the input to "1" or "2"
let loanDurationMonths;

switch (loanDurationFormat) {
  case '1':
    prompt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationYears']);
    loanDurationMonths = validNumberInt(1) * MONTHS_IN_A_YEAR;
    prompt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationMonths']);
    loanDurationMonths += validNumberInt(0);
    break;
  case '2':
    prompt(LOAN_CALCULATOR_MESSAGES[language]['loanDurationMonths']);
    loanDurationMonths = validNumberInt('=> Please enter the loan duration in Months: ');
    break;

  default:
    break;
}

let monthlyPayment = loanAmount * (monthlyIntrestRate / (1 - Math.pow((1 + monthlyIntrestRate), (-loanDurationMonths))));

summary();

prompt(LOAN_CALCULATOR_MESSAGES[language]['thanks']);

function prompt(text) {
  console.log('=> ' + text);
}

function validNumberFloat() {
  let float = Number(READLINE.prompt());

  while (isNaN(float) || float <= 0 ) {
    prompt('This does not look like a valid number');
    float = Number(READLINE.prompt());
  }
  return float;
}

function validNumberInt(validFirstNum) {
  let int = Number(READLINE.prompt());

  while ( !Number.isInteger(int) || int < validFirstNum) {
    prompt('This does not look like a valid number');
    int = Number(READLINE.prompt());
  }
  return int;
}

function summary() {
  prompt('+--------------------------------------+');
  prompt(`|${paddingCalculator('~~~~~~~~~~~~~~~~~')}|`);
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['summary'])}|`);
  prompt(`|${paddingCalculator('~~~~~~~~~~~~~~~~~')}|`);
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['summaryLoanAmount'])}|`);
  prompt(`|${paddingCalculator(loanAmount)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['monthlyPayment'])}|`);
  prompt(`|${paddingCalculator(monthlyPayment)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['loanTermMonths'])}|`);
  prompt(`|${paddingCalculator(loanDurationMonths.toString())}|`);
  prompt('|--------------------------------------|');
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['totalInterest'])}|`);
  prompt(`|${paddingCalculator((monthlyPayment * loanDurationMonths) - loanAmount)}|`);
  prompt('|--------------------------------------|');
  prompt(`|${paddingCalculator(LOAN_CALCULATOR_MESSAGES[language]['totalPayment'])}|`);
  prompt(`|${paddingCalculator(monthlyPayment * loanDurationMonths)}|`);
  prompt('+--------------------------------------+');
}

function paddingCalculator(input) {
  if (typeof input === 'number') {
    input = (currencyFormat.format((Math.round(input * 100)) / 100));
  }

  let limit = Math.round(((38 - input.length) / 2) + input.length);

  input = input.padStart(limit, ' ');
  input = input.padEnd(38, ' ');

  return input;
}

