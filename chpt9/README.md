# Regular Expressions
## Creating A Regular Expression

Regular Expressions are objects
```javascript
var regExpression = new RegExp("gina");
var regExpressionLit = /gina/;
```

* special characters in Regular Expressions must
  be followed with a "/" if you would like their
  literal representation

`var over21 = /twenty-one\+/;`

## Testing Your Matches
Test to see if your Reg. Expression caught any matches.

`console.log(/gina/.test("gina")); // -> true`
`console.log(/gina/.test("123")); // -> false`

## Matching A Set Of Characters

PUTTING A SET OF CHARACTERS BETWEEN SQUARE BRACKETS MAKES 
THAT PART OF THE EXPRESSION MATCH ANY OF THE CHARACTERS BETWEEN THE BRACKETS

