function range(start, end, step) {
  var arr = [];
  if (!step || step.isNaN) {
    if (start <= end) step = 1;
    else step = -1;
  }
  if (start <= end) {    
    for (start; start <= end; start += step) {
      arr.push(start);
    }
  } else {
    for (start; start >= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
function sum(arr) {
 var sum = 0;
 
 // Your code here
 arr.forEach((item) => {
   sum += item
 })
 
 return sum;
}}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
