// THIS CODE IS WRITTEN BY HAVERBEKE. MY SOLUTIONS CAN BE FOUND UNDER THEIR RESPECTIVE FILES. 
// I JUST PUT THESE HERE FOR YOUR CONVENIENCE IF YOU ARE USING THIS REPO AS A LEARNING TOOL.
// YOU CAN ALSO SEE HAVERBEKES SOLUTION ON HIS SITE: http://eloquentjavascript.net/code

// solution to looping a triangle:
for (var line = "#"; line.length < 8; line += "#")
console.log(line);

// solution to fizzBuzz:
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n); // I thought the logical operator was clever here.
}

// solution to chess board:
var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);