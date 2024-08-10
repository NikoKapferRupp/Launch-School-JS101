function union(arr1, arr2) {
    return removeDuplicates(arr1.concat(arr2));
}

function removeDuplicates(arr) {
  for (let index = 0; index < arr.length; index++) {
    let result = arr.filter((num) => num === arr[index]);
    console.log(result)
    if(result.length > 1) {
      arr.splice(index, 1)
      index -= 1
    };  
  };  
  return arr.sort();
}

console.log(union([1, 3, 5], [3, 6, 9]))