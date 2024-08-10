let count = 0;
let resultSum = 0;

function sum(num) {
  count = 0
  resultSum = 0
  let numArray = num.toString().split('');
  wip(numArray);
  return resultSum;
}

function wip(arr) {  
  resultSum += Number(arr[count]);
  count += 1;
  console.log(resultSum + ' count:' + count)
  if(count === arr.length) {return}
  wip(arr);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45