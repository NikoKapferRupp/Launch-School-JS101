function multiplicativeAverage(array) {
  let result = 1;
  
  array.forEach(element => {
    result *= element;
  });
result /= array.length;
return result.toFixed(3)
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));