function reverseSentence(str) {
  console.log(str.split(' ').reverse().join(' '));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"