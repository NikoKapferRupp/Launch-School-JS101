function  isPalindromicNumber() {
  return isPalindrome(String(number));
}

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  
  return string === reversedString;
}