function sequence(num) {
  let numArray = []; 
  for (let index = 1; index <= num; index++) {
    numArray.push(index);
  }
  console.log(numArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]