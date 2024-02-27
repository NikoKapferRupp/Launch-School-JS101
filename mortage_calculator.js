const READLINE = require('readline-sync');

function prompt(text) {
  console.log('=> ' + text);
}

prompt('Welcome to the Loan Calculator!');

let loanAmount = READLINE.questionFloat('=> Please enter the loan amount in dollar: ');
let monthlyIntrestRate = READLINE.questionFloat('=> Please enter the monthly intrest rate in %: ');

prompt('How do you want to enter the loan duration?:');
prompt('1) [YEARS] [MONTHS]');
prompt('2) [MONTHS]');

let loanDurationFormat = READLINE.keyIn({limit: [1, 2]});

if(loanDurationFormat === 1) {
  
}

let loanDurationMonths = READLINE.questionInt('Please enter the loan duration in Months.');
prompt(loanAmount);




//let monthlyPayment = loanAmount * (monthlyIntrestRate / (1 - Math.pow((1 + loanAmount), (-loanDurationMonths))));

