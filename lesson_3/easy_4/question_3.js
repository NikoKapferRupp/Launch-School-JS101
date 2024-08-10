function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  
  return string === reversedString;
}

function isRealPalindrome(string) {
  let cleanString = '';
  string = string.toLowerCase();
  for (let index = 0; index < string.length; index++) {
    if((string[index] <= 'z' && string[index] >= 'a')||(string[index] <= 9) && (string[index] >= 0) && string[index] !== ' ') {
      cleanString += string[index]
    }  
  }
  console.log(cleanString)
  console.log(isPalindrome(cleanString))
  return isPalindrome(cleanString);
}



isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');  