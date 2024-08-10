function wordSizes(string) {
  let numberObject = {};  
  let lenghtArray = [];

  let wordsArray = string.split('');
  for (let index = 0; index < wordsArray.length; index++) {
     if(wordsArray[index] !== ' ' && wordsArray[index].toLowerCase() < 'a' || wordsArray[index].toLowerCase() > 'z') {
      wordsArray[index] = '';
      }  
  }

  string = wordsArray.join('')
  wordsArray = string.split(' ');
  wordsArray.sort((a, b) => a.length - b.length);

  for (let index = 0; index < wordsArray.length; index++) {
    lenghtArray[index] = wordsArray[index].length;
    numberObject[lenghtArray[index]] = getSameLength(lenghtArray[index], wordsArray);
  }

  console.log(numberObject);
}

function getSameLength(length, wordsArray) { 
  return((wordsArray.filter((word) => word.length === length)).length);
}

wordSizes('');