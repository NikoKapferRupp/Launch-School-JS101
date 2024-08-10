function dms(angle) {
  let result = new Array(3);
  result[0] = Math.floor(angle);
  result[1] = getMinutes(angle);
  result[2] = getSeconds(angle);
  return resultToString(result);
}

function getMinutes(angle) {
  angle = Math.floor((angle % 1) * 100);
  return Math.round((angle / 100) * 60);
}


function getSeconds(angle) {
  angle = (angle % 1) * 100;
  angle = ((angle / 100) * 60);
  angle = ((angle % 1) * 100);
  angle = Math.floor((angle / 100) * 60)
  return angle;
}

function resultToString(result) {
  for (let index = 0; index < result.length; index++) {
    if(result[index] === 0) {
      result[index] = '00'
    } else if (result[index] < 10) {
      result[index] = '0' + result[index].toString();
    } else {
      result[index] = result[index].toString();
        }
  }
  return result[0] + '°' + result[1] + `'` + result[2] + `"`
}
console.log(dms(76.73))
console.log(dms(254.6))
console.log(dms(93.034773))
console.log(dms(0))
console.log(dms(360))
console.log()