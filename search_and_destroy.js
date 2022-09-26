const searchAndDestroy = function (arr, target) {
  let index = arr.indexOf(target)
  
  while(index != -1) {
      arr = arr.slice(0, index).concat(arr.slice(index+1))
      index = arr.indexOf(target)
  }
  
  
  
  return arr;
}

var numbers = [1, 3, 5, 7, 5, 3, 1];
var without3 = searchAndDestroy(numbers, 3);
console.log(without3);
// -> [1, 5, 7, 5, 1]
console.log(numbers);
// -> [1, 3, 5, 7, 5, 3, 1]