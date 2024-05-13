let munstersDescription = "The Munsters are creepy and spooky.";

function caseReverse(str) {
  let munstersDescriptionReverse = [];
  for(let index = 0; index < str.length; index += 1) {
    if(str[index] === str[index].toUpperCase()) {
      munstersDescriptionReverse.push(str[index].toLowerCase());
    } else {
      munstersDescriptionReverse.push(str[index].toUpperCase());
    }
  }
  return munstersDescriptionReverse.join('');
}

console.log(caseReverse(munstersDescription));