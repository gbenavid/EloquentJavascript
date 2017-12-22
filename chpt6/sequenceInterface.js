/*
  Design an interface. 
  The Sequential object is an interface that represents a sequence
*/

function Sequential() {
  // abstracts iteration over a collection of values
  // looks at the element values it is made up of 
  // knows when the end of the sequence is reached.
  // code that uses Sequential can iterate over their sequence
}

function logFive(sequentialObject) {
  // takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.
  // if typeof sequentialObject === "ArraySeq" || "Array"
  
}

function ArraySeq() {
  // wraps an array and allows iteration over the array using Sequential.
}

function RangeSeq (startingNumber, endpointNumber) {
  // iterates over a range of integers using Sequential
  //? this.from = startingNumber;
  //? this.to = endpointNumber;
  // returns array
}
// logFive(new ArraySeq([1, 2]));
// → 1
// → 2
// logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104