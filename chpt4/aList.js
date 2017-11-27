/*
  * arrayToList() builds up a data structure like the previous one when given [1, 2, 3] as argument, 
  * listToArray() produces an array from a list. 
  * prepend(el, list) which creates a new list that adds the element to the front of the list, 
  * nth(list, num) which returns the element at the given position in the list, 
    or undefined when there is no such element. ***recursive version requested.
*/
function arrayToList(array) {
  
}

console.log(arrayToList([10, 20])); 
/*   
{value: 10,
rest: {value: 20, 
      rest: null} 
} */

function listToArray(list) { }
// console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]

function prepend (el, list) { }
// console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

function nth(list, num) { }
// console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20