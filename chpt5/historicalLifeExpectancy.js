var ancestry = JSON.parse(require("./resources/ancestry.js"));
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon. Output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function historicalLifeExpectancy(ancestryData) {
  // divide each person's age into sub arrays within an object.
  var peopleGroupedByCentury =  {};
  ancestryData.map( function(personObject) {
    var century = (Math.ceil(personObject.died / 100)).toString();
    if (peopleGroupedByCentury.hasOwnProperty(century)) {
      peopleGroupedByCentury[century].push(personObject.died - personObject.born);
    } else {
      peopleGroupedByCentury[century] = [personObject.died - personObject.born];
    }
  });
  return peopleGroupedByCentury;
}
console.log(historicalLifeExpectancy(ancestry));
 