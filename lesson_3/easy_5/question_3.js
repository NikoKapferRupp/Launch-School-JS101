function halvsies(array) {
  let resultArray = [[],[]];
  let arrayHalfLength = Math.ceil(array.length / 2);
  
  for (let index = 0; index < array.length; index++) {
    if(index < arrayHalfLength) {
      resultArray[0].push(array[index])
    } else {
      resultArray[1].push(array[index])
    }    
  }
  return resultArray;
}

function halvsiesTwo(array) {
  
}


console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));

