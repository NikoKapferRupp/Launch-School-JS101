function sequence(count, num) {
  let arr = [];
  for (let index = 0; index < count; index++) {
    arr.push(num * (index + 1))    
  }  
  console.log(arr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []