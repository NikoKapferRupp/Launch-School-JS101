const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

function afterMidnight(str) {
  let minutes = getMinutes(str);
  return minutes === MINUTES_IN_DAY ? 0 : minutes;
}

function beforeMidnight(str) {
  let minutes = getMinutes(str);
  return minutes === 0 ? 0 : MINUTES_IN_DAY - minutes;
}

function getMinutes(str) {
  let stringArray = str.split(':');
  return (Number(stringArray[0]) * MINUTES_IN_HOUR) + Number(stringArray[1])
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);