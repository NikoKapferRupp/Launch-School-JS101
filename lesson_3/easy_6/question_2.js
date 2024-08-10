function doubleConsonants(str) {
  let doubledString =  '';
  let arr = str.split('');
  arr.forEach(element => {
    if(element.match(/[bcdfghjklmnpqrstuvwxyz]/i)) {
      doubledString += (element + element);
    } else {
      doubledString += element;
    }
    
  });
  console.log(doubledString)
  return doubledString;
}
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                