/*
range() takes two arguments, start and end, and 
  returns an array containing all the numbers from start up to end.

sum() takes an array of numbers and returns the sum of these numbers.

As a bonus assignment, modify your range function to 
  take an optional third argument that indicates the “step” value used to build up the array. 
  If no step is given, the array elements go up by increments of one. 
*/

function range (start, end, step = 1) {
  // if (step < 0) { return countDown(start, end, step) }
  var collection = [];
  var i = start; 
  if (i > 0) {
    while (i <= end) {
      collection.push(i);
      i += step;
    }
  } else {
    while (i >= end) {
      collection.push(i);
      i += step;
    }
  }
  return collection;
}

function countDown (start, end, step) {
  var collection = [];
  var i = start; // 5
  while (i >= end) {
    collection.push(i);
    i += step;
  }
  return collection;
}

function sum (collection) {
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  return sum;
}

console.log(sum(range(1, 10))); //-> 55
console.log(range(1, 10, 2)); //-> [1, 3, 5, 7, 9];
console.log(range(5, 2, -1)); //->  [5, 4, 3, 2];
