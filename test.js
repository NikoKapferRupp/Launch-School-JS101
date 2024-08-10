let year = 2023;
let person = {
  name: 'Bob',
  age: 24,
  yearOfBirth: 1984
}

function incrementNum(num) {
  return num = num + 1
}

function updateAge(num, obj) {
  obj.age = num - obj.yearOfBirth
}

incrementNum(year);
updateAge(year, person);


console.log(year);
console.log(person.age);





