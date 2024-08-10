function interleave(arr1, arr2) {
  let resultArray = [];
  while(arr1.length > 0) {
    resultArray.push(arr1.shift(), arr2.shift());
    //resultArray.push(arr2.shift());
  }
  return resultArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

function interleaveTwo(arr1, arr2) {
  let resultArray = [];
  arr1.array.forEach(element => {});
  
}