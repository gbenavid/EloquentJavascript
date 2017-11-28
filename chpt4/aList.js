/*
  * arrayToList() builds up a data structure like the previous one when given [1, 2, 3] as argument
  * listToArray() produces an array from a list. 
  * prepend(el, list) which creates a new list that adds the element to the front of the list, 
  * nth(list, num) which returns the element at the given position in the list, 
    or undefined when there is no such element. ***recursive version requested.
*/
function arrayToList(array) {
  var list = {};
  var valueCounter = 0;
  // list['value'] = index 0 in array -> {value: 1}
    // remove index 0 from array
    // valueCounter++;
      // list['rest'] = ...; {value: 1, rest: {}}
        // remove index 0 from array
        // list['rest'] = array
          // value 2 in list is index 0 in array
  
  return list;
}
// input: [1, 2, 3]; output: list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};

console.log(arrayToList([10, 20])); // {value: 10, rest: {value: 20, rest: null}

function listToArray(list) { } // console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]

function prepend (el, list) { } // console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

function nth(list, num) { } // console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20