/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into 
a single array that has all the elements of the input arrays. */

function flatten (arrays) {
  var array = [];
  for (var i = 0; i < arrays.length; i += 1) {
    if (arrays[i].length == 1) {
      array.push(arrays[i][0]);
    } else {
      for (var j = 0; j < arrays[i].length; j++) {
        array.push(arrays[i][j]);
      }
    }
  }
  return array;
}
