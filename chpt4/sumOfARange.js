/*
range() takes two arguments, start and end, and 
  returns an array containing all the numbers from start up to end.

sum() takes an array of numbers and returns the sum of these numbers.

As a bonus assignment, modify your range function to 
  take an optional third argument that indicates the “step” value used to build up the array. 
  If no step is given, the array elements go up by increments of one. 
*/

// Ehh.. I'm not that happy with the solution to range() & countDown(). Pull request anyone?
// Even after looking at the answer I feel like this is somehow awkward.

function range (start, end, step = 1) {
  if (step < 0) { return countDown(start, end, step) }
  var collection = [];
  var i = start; 
  while (i <= end) {
    collection.push(i);
      i += step;
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
