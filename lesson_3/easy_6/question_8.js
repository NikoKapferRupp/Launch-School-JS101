function reverseWords(str) {
  let result = [];
  str.split(' ').forEach(element => {
    element.length <= 5 ? result.push(element) : result.push(element.split('').reverse().join(''))

  });
  console.log(result.join(' '))
}



reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"