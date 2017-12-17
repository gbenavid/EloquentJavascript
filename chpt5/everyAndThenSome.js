/*
Both take a predicate function that, when called with an array element as argument,
returns true or false.
every() returns true only when the predicate returns true for all elements of the array.
Similarly, some() returns true as soon as the predicate returns true for any of the elements.
*/

function every(array, predicate){
  // * every el in array must be true *
  // loop
    // if all element == predicate
      // return true
    // else 
      // return false
}
console.log(every([NaN, NaN, NaN], isNaN)); // true
console.log(every([NaN, NaN, 4], isNaN)); // false
