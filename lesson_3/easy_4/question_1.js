const readlineSync = require('readline-sync');

let numberArray = [];
let countArray = ['1st', '2nd', '3rd', '4th', '5th'];

function getUserInput(count) {
  while(true) {
    let input = Number(readlineSync.question(`Enter the ${count} number: `));
  
    if(isNumberValid(input)) {
      return input
    }
  }  
}

function isNumberValid(number) {
  if(Number.isNaN(number) === false && typeof number  === 'number' && number !== '') {return true}
  else {
    console.log('Please enter a valid number.')
    return false
  }
}

for (let index = 0; index < countArray.length; index++) {
  numberArray.push(getUserInput(countArray[index]));
}

let lastNumber = getUserInput('last')

if(numberArray.includes(lastNumber)) {
  console.log(`\nThe number ${lastNumber} appears in ${numberArray}.`)
} else {
  console.log(`The number ${lastNumber} does not appear in ${numberArray}.`)
}






