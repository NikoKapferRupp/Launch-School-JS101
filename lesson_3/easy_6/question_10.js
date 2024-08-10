function isBalanced(str) {  
  let parantheseArray = str.match(/[()]/g);

  if(parantheseArray === null || parantheseArray[0] === '(' && parantheseArray[parantheseArray.length - 1] === ')' && parantheseArray.length % 2 === 0 ) {
    return true
  } else {
    return false
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);