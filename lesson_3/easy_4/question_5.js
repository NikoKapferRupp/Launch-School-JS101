function runningTotal(array) {
  let growingNumber = 0;
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray[index] = array[index] + growingNumber
    growingNumber += array[index]
  }
  console.log(newArray)
  return newArray
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []