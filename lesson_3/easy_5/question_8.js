function digitList(int) {
  let numToStringArray = int.toString().split('');
  let numArray = []
  numToStringArray.forEach(element => {
    numArray.push(Number(element));
  });
  return numArray;
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));