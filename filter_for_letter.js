let words = ['hello', 'sunshine', 'apple', 'orange', 'pineapple'];

let wordsWithA = words.filter(function (word) {
  return word.indexOf('a') != -1
  
  
});

console.log(wordsWithA[0] === 'apple');
// true
console.log(wordsWithA[1] === 'orange');
// true
console.log(wordsWithA[2] === 'pineapple');
// true