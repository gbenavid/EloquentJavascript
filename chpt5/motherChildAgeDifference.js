var ancestry = JSON.parse(require("./resources/ancestry.js"));
/*
  Using the data from ./resources/ancestry.js, compute the average age difference between mothers and children. 
  You can use the average function defined earlier in this chapter.

  Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// filter out the mothers with no data
function filterMoms(ancestryData) {
  var mothers = ancestryData.filter(function(person) {
    return person.mother;
  });
  return mothers;
}

// find the mothers age
function collectedAges (mothersAge) {

}

// find the average of all of those ages
// output average age of mothers