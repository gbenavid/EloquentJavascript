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
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array) {
  for (var i = array.length - 1; i >= Math.floor(array.length/2); i -= 1) {
    var temp = array[array.length - 1 - i] // 1
    array[array.length - 1 - i] = array[i]; // *5*, 2, 3, 4, 5
    array[i] = temp; // 5, 2, 3, 4, *1*
    // i = 4; temp = 5
  }
  return array;
}
reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // → [5, 4, 3, 2, 1]
