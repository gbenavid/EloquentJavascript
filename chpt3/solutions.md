# Minimum

```javascript
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
```

# Recursion
```javascript
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n); // I like how he did this bit
  else
    return isEven(n - 2);
}
```

# Bean Counting
```javascript
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
```
**View these solutions in the [coding sandbox](http://eloquentjavascript.net/code/)**