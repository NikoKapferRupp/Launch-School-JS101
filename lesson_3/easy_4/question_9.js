function stringToInteger(string) {
  let isNegative = false;
  let num = 0;
  for (let index = 0; index < string.length; index++) {
    if(string[index] === '-') {
      string = removeFirstChar(string);
      isNegative = true;

    } else if(string[index] === '+') {
      string = removeFirstChar(string);
    }
    num *= 10
    num += (string.charCodeAt(index) - 48)
  }
  if(isNegative === true) { num *= -1 }
  return num;
}

function removeFirstChar(string) {
  return string.split('').slice(1).join('');  
}

console.log(stringToInteger("-4321")); // logs true  
console.log(stringToInteger("+570") === 570); // logs true  
