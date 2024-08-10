const NUMARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num){
  let string = '';
  let sign = '';
  if(Math.sign(num) === -1) {
    num *= -1;
    sign = '-'
  }
  while (true) {
    string = NUMARRAY[num % 10] + string
    num = Math.floor(num / 10);
    if(num === 0 || num === -0) {
      string = sign += string;
      return string
    }   
  } 
}

console.log(integerToString(-43210))