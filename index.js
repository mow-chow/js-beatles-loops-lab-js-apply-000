// add solution here
//first look at index-test.js to see correct information

var musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];
var instruments = ["Guitar", "Bass GUitar", "Drums", "Lead Guitar"];
//defined variables with array of names and instrumetns

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
        array.push(musicians[i] + " plays " + instruments[i])
      }
      return array
}
//create empty array
//create function that accepts two arguments, iterating through each array and
//crafting a sentance (interpolation) before adding each completed sentance into the empty array

function johnLennonFacts(facts) {
  var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice',
  ];
var array = [];
let i = 0;
while (i < 4) {
  array.push(facts[i] + "!!!")
  i++
}
//create a variable that holds an array of facts
//create an empty array
//create function that accepts one argument, facts array, and loops through the array adding a string
//returns the new array
return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
  array.push("I love the Beatles!")
  number ++
}
while (number < 15)
return array
}
//create an empty array
//create a function that accepts one argument, a number, runs a do while loop that pushes a string into the empty array
//until it satisfies the established conditions
