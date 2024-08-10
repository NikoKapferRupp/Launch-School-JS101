const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

function timeOfDay(num) {
  num = trimMinutes(num);
  let hour = Math.floor(num / MINUTES_IN_HOUR);
  let minutes = num % MINUTES_IN_HOUR

  return `${leadingZero(hour)}:${leadingZero(minutes)}`
}

function trimMinutes(num) {
  while(num < -MINUTES_IN_DAY || num > MINUTES_IN_DAY) {
    if(num < -MINUTES_IN_DAY) {
      num += MINUTES_IN_DAY
    } else if(num > MINUTES_IN_DAY) {
      num -= MINUTES_IN_DAY
    }
  }
  if(num < 0) {
    num += MINUTES_IN_DAY;
  }
  return num;
}

function leadingZero(num) {
  return num < 10 ? '0' + String(num) : String(num);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");