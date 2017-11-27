/*
countBs() takes a string and returns the number of uppercase “B”'s are in that string.
countChar() behaves like countBs() but also takes a single character that is to be counted.
**Rewrite countBs to make use of this new function.
 */

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'B') {
      count++;
    }
  }
  return count;
}
console.log(countBs("ginaB"));
