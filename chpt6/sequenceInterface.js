/*
  Design an interface. 
  The Sequential object is an interface that represents a sequence
*/

function Sequential(sequentialObject, calls) {
  // this.isA = typeof sequentialObject;
  // this.last = calls || sequentialObject.length;
  // loop is based on type
    // for i in/ while/ for
  // return array
}

function logFive(sequentialObject) {
  let calls = sequentialObject.length < 5 ? sequentialObject.length : 5;
  let i = 0;
  while (i < calls) {
    console.log(sequentialObject[calls]);
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