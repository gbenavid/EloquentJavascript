/*
  Design an interface. 
  The Sequential object is an interface that represents a sequence
*/

function Sequential(array) {
  this.last = array.length - 1;
  this.contents = array;
}

Sequential.prototype.x = function() {
  // what functionality should Sequential have access to?
}

function logFive(sequentialObject) {
  let calls = sequentialObject.last < 5 ? sequentialObject.last : 5;
  let i = 0;
  while (i < calls) {
    console.log(sequentialObject.array[calls]);
    i += 1;
  }
}

function ArraySeq(array) { 
  return Sequential(array);
}

function RangeSeq (startingNumber, endpointNumber) {
  //? this.from = startingNumber;
  //? this.to = endpointNumber;
  // returns array of integers
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