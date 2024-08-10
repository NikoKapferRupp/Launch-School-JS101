function stringToInteger(string) {
  let num = 0;
  for (let index = 0; index < string.length; index++) {
    num *= 10
    num += (string.charCodeAt(index) - 48)
  }
  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true