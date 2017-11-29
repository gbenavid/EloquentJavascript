/*
  * arrayToList() builds up a data structure like the previous one when given [1, 2, 3] as argument
  * listToArray() produces an array from a list. 
  * prepend(el, list) which creates a new list that adds the element to the front of the list, 
  * nth(list, num) which returns the element at the given position in the list, 
    or undefined when there is no such element. ***recursive version requested.
*/
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i -= 1) {
      list = {value: array[i], rest: list}
    }
    return list;
}

function listToArray(obj, array = []) {
  for (const prop in obj) {
    if (typeof obj.value !== null ) {
      array.push(obj.value);
      listToArray(obj.rest, array);
    }
    return array; // the return statement is here because this is when we hit the bottom of our list and obj.value == null
  }
}

// * prepend(el, list) which creates a new list that adds the element to the front of the list, 
function prepend (el, list) {
  return {value: el, rest: list};
}

// console.log(prepend(20, null));
console.log( prepend( 10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

function nth(list, num) { } // console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
