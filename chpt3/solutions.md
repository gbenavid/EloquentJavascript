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