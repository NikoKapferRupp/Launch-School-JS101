function swap(string) {
  let wordArray = string.split(' ');

  for (let index = 0; index < wordArray.length; index++) {
    let letterArray = wordArray[index].split('')
    let firstLetter = letterArray[0];
    let lastLetter = letterArray[letterArray.length - 1];

    letterArray[0] = lastLetter;
    letterArray[letterArray.length - 1] = firstLetter;

    wordArray[index] = letterArray.join('');
    }
    return wordArray.join(' '); 
}

console.log(swap('a'));

