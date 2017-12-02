var ancestry = JSON.parse(require("./resources/ancestry.js"));
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function perCentury(ancestryData) {
  return ancestryData.map(function(person) { // reduce? 
    // return REGEX string of last 2 digits and then their years lived.
    // return array of people who died in same century + person.died - person.born
    if (person.died < 1600 && person.died > 1501) {
      return ("16: " + person.died);
      } else if (person.died > 1601 && person.died < 1700) {
        return ("17: " + person.died);
      } else if (person.died > 1701 && person.died < 1800) {
        return ("18: " + person.died);
      } else if (person.died > 1801 && person.died < 1900) {
        return ("19: " + person.died);
      } else if (person.died > 1901 && person.died < 2000) {
        return ("20: " + person.died);
      } else if (person.died > 2001 && person.died < 2018) {
      return ("21: " + person.died);
    }
  });
}
console.log(perCentury(ancestry));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94