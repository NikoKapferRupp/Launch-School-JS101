let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function objectContains(obj, str) {
 //return Object.keys(obj).includes(str);
 return obj.hasOwnProperty(str)
}

console.log(objectContains(ages, 'Spot'));
console.log(objectContains(ages, 'Lily'));
