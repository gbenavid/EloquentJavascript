/* 
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
*/

function isEven (num) {
  // check is number is 0 
  if (num == 0) {
    return true;
  }
  if (num == 1) {
    return false;
  }
  return isEven(num - 2);
}

// console.log(isEven(75)); // false
// console.log(isEven(50)); // true
// console.log(isEven(-1)); // false
