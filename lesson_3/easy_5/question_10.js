function average(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return Math.floor(sum / arr.length)
}

console.log(averageTwo([9, 47, 23, 95, 16, 52]));

function averageTwo(arr) {
  return Math.floor((arr.reduce((acc, cur) => acc + cur)) / arr.length)
}