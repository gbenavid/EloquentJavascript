/* 
  Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
  At each position of the grid there is either a space or a “#” character. 
  The characters should form a chess board.

  Passing this string to console.log should show something like this:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
*/

function chessBoard (size = 8) {
  var board = "";
  for (var i = 1; i <= size; i++) {
    for (var j = 0; j <= size; j++) {
      if ((i + j) % 2 == 0) {
        board += '#';
      } else {
        board += ' ';
      }
    }
    board += "\n";
  }
  return board;
}
console.log(chessBoard());

/*
  When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/