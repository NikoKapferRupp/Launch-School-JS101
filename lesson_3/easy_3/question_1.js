let numbers = [1, 2, 3, 4];

numbers.length = 0;

numbers.splice(0, numbers.length);

numbers.slice(numbers.length);