const NUMBER_NAMES = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen]

function alphabeticNumberSort(arr) {
  let numArray = [];
  let resultArray = [];

  
  arr.forEach(element => {
    numArray.push(NUMBER_NAMES[element]);
  });
  numArray.sort();

  for (let index = 0; index < numArray.length; index++) {
    resultArray.push(numArray.findIndex((element) => element === NUMBER_NAMES[index])) 
    
  }
}

