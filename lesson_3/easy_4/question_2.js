function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  
  return string === reversedString;
}

isPalindrome('356653')