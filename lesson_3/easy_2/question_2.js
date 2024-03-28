let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();


reversedNumbers = numbers.slice().sort();

numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);
console.log(numbers);