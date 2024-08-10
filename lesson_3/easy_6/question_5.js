function swapNames(str) {
  return str.split(' ')[1] + ", " + str.split(' ')[0];
}

console.log(swapNames('Joe Roberts'))

function swapNameTwo(name) {
  let result =  name.split(' ');
  return result.pop() + ', ' + result.join(' ');
}

console.log(swapNameTwo('Karl Oskar Henriksson Ragvals'));