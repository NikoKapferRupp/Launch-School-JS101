const READLINE = require('readline-sync');
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function prompt(text) {
  console.log('=> ' + text);
};

function validNumberFloat(question) {
  let float = Number(READLINE.question(question));

  while (isNaN(float) || float <= 0) {
    prompt('This does not look like a valid number');
    float = Number(READLINE.question(question));
  } 
  return float;
};

function validNumberInt(question, validFirstNum) {
  let int = Number(READLINE.question(question));

  while ( !Number.isInteger(int) || int < validFirstNum) {
    prompt('This does not look like a valid number');
    int = Number(READLINE.question(question));
  } 
  return int; 
};

function summary() {

  console.log('+--------------------------------------+');
  console.log(`|${whiteSpaceCalculator('~~~~~~~~~')}|`);
  console.log(`|${whiteSpaceCalculator('~Summary~')}|`);
  console.log(`|${whiteSpaceCalculator('~~~~~~~~~')}|`);
  console.log(`|${whiteSpaceCalculator('Your loan amount:')}|`);
  console.log(`|${whiteSpaceCalculator(loanAmount)}|`);
  console.log('|--------------------------------------|');
  console.log(`|${whiteSpaceCalculator('Your payment every month:')}|`);
  console.log(`|${whiteSpaceCalculator(monthlyPayment)}|`);
  console.log('|--------------------------------------|');
  console.log(`|${whiteSpaceCalculator('Your loan term in months:')}|`);
  console.log(`|${whiteSpaceCalculator(loanDurationMonths.toString())}|`);
  console.log('|--------------------------------------|');
  console.log(`|${whiteSpaceCalculator('Your total interest:')}|`);
  console.log(`|${whiteSpaceCalculator((monthlyPayment * loanDurationMonths) - loanAmount)}|`);
  console.log('|--------------------------------------|');
  console.log(`|${whiteSpaceCalculator('Your total payment:')}|`);
  console.log(`|${whiteSpaceCalculator(monthlyPayment * loanDurationMonths)}|`);
  console.log('+--------------------------------------+');
};

function whiteSpaceCalculator(input) {
  if(typeof input === 'number') {    
    input = (formatter.format((Math.round(input * 100)) / 100));
  };
  
  let limit = Math.round(((38 - input.length) / 2) + input.length);
  
  input = input.padStart(limit, ' ');
  input = input.padEnd(38, ' ');

  return input;  
};



prompt('+-------------------------------------+');
prompt('|   Welcome to the Loan Calculator!   |');
prompt('+-------------------------------------+');

let loanAmount = validNumberFloat('=> Please enter the loan amount in dollar: '); 
let monthlyIntrestRate = validNumberFloat('=> Please enter the annual intrest rate in %: ') / 100 / 12; 


prompt('How do you want to enter the loan duration?:');
prompt('1) [YEARS] [MONTHS]');
prompt('2) [MONTHS]');

let loanDurationFormat = READLINE.keyIn('=> ', {limit: [1, 2]}); // limits the input to "1" or "2"
let loanDurationMonths;

switch (loanDurationFormat) {
  case '1':
    loanDurationMonths = validNumberInt('=> Please enter the loan duration in Years: ', 1) * 12;
    loanDurationMonths += validNumberInt('=> Please enter the loan duration in Months: ', 0);
    break;
  case '2':
    loanDurationMonths = validNumberInt('=> Please enter the loan duration in Months: ');
    break;

  default:
    break;
};

let monthlyPayment = loanAmount * (monthlyIntrestRate / (1 - Math.pow((1 + monthlyIntrestRate), (-loanDurationMonths))));

summary();

