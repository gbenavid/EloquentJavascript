/*
Write two functions,
reverseArray -> 
  takes an array as argument and produces a new array that has the same elements in the inverse order. 
reverseArrayInPlace ->
  modifies the array given as argument in order to reverse its elements.
Which variant do you expect to be useful in more situations? 
Which one is more efficient?
*/

function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i > 0; i--) {
    console.log(array[i]);
  }
  return newArray;
}
console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(array) { }
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]