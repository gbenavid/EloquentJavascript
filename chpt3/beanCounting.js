/*
countBs() takes a string and returns the number of uppercase “B”'s are in that string.
countChar() behaves like countBs() but also takes a single character that is to be counted.
**Rewrite countBs to make use of this new function.
 */

function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}
