/*
Both take a predicate function that, when called with an array element as argument,
returns true or false.
every() returns true only when the predicate returns true for all elements of the array.
Similarly, some() returns true as soon as the predicate returns true for any of the elements.
*/

function every(array, predicate){
  var i = 0;
  while (i < array.length) {
    if (i == array.length - 1 && predicate(array[i])) { // could i use | op and nest the if statement?
      return true;
    } else if (predicate(array[i])) {
      i += 1;
    }
    else {
      return false;
    }
  }
}
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
