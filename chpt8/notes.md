# Bugs and Error Handling

## Strict Mode
Use strict mode when developing by placing it at the
top of your file or function.
* error reports for undefined vars
* `this` bindings holds the value `undefined` in
  functions that are not called as methods as opposed
  to the global scope object.
* Disallows giving a function multiple parameters with
  the same name
* removes problematic language features (i.e the with
  statememt)
 
## Error Propagation
> When a function cannot proceed normally, what we
> would like to do is just stop what we are doing and
> immediately jump back to a place that knows how to
> handle the problem. This is what exception handling
> does.

The `throw` error is used to raise an exception.

`throw new Error("Invalid Input: " ...)`

Catching an error is done by wrapping code in a `try`
block, followed by the keyword `catch`.



```javascript
try {
  // some code that your program will try to run
} catch (error) {
  // code here will be evaluated if there is an
  // exception raised. The var name error will be
  // bound to the exception value.
}
// program proceeds...
```


**A finally block means “No matter what happens, run this code after trying to run the code in the try block”.**

```javascript
try {
  // some code to try
} catch (err) {
  // if exception is raised
} finally {
  // some code that will always be run regardless of
  // the control flow outcome
  // best for clean-ups
}
```

**Don’t blanket-catch exceptions unless it is for the purpose of “routing” them somewhere—for example, over the network to tell another system that our program crashed.**


