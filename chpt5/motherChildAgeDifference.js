var ancestry = JSON.parse(require("./resources/ancestry.js"));
/*
  Using the data from ./resources/ancestry.js, compute the average age difference between mothers and children. 
  You can use the average function defined earlier in this chapter.

  Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.*/

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function filterMoms(ancestryData) {
  var mothers = ancestryData.filter(function(person) {
    return person.mother;
  });
  return mothers;
}

function ageAtChildBirth (ancestryData) { 
  var ages = [];
  for (var person = 0; person < ancestryData.length; person += 1) {
    var mom = ancestryData[person].mother;
    if (byName[mom]) {
      ages.push(ancestryData[person].born - byName[mom].born);
    }
  }
  return ages;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
