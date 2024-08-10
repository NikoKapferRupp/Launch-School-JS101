function countOccurrences(vehicles) {
  let vehicleObj = {};  
    
  for (let index = 0; index < vehicles.length; index++) {
    let currentWord = vehicles[index];
    if(vehicleObj[currentWord]) {
      vehicleObj[currentWord] += 1;
    } else {      
      vehicleObj[currentWord] = 1;
    }
  }  
  printer(vehicleObj);
}

function printer(obj) {
  let keys = Object.keys(obj);  
  let values = Object.values(obj);
  for (let index = 0; index < keys.length; index++) {    
    console.log(`${keys[index]} => ${values[index]}`);
  }
}

countOccurrences(['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'suv', 'motorcycle', 'car', 'truck']);