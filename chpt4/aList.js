/*
arrayToList() builds up a data structure like the previous one when given [1, 2, 3] as argument, 
and listToArray() produces an array from a list. 
Also write prepend(el, list) which creates a new list that adds the element to the front of the list, 
and nth(list, num) which returns the element at the given position in the list, 
  or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth. 
*/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20