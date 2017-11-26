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
