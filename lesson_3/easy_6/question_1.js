function repeater(str) {
  let doubledString =  '';
  str.split('').forEach(element => {
    doubledString += (element + element)
  });
  return doubledString;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));