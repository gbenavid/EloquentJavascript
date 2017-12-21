var TextCell = require("./src/constructors"); // i wanted to try importing a file, unfortunately I didn't know that NodeJS does not support 'import' quite yet. Until then I'm stuck with this ugly require statement, I'm not even sure if this is best practice, but it works and I can live with that. Please feel free to rip this apart in a PR
/*
 Implement a cell type named StretchCell(inner, width, height) that 
 conforms to the table cell interface described earlier in the chapter. 
 It should wrap another cell (like UnderlinedCell does) and ensure 
 that the resulting cell has at least the given width and height, 
 even if the inner cell would naturally be smaller.
 */

 function StretchCell(inner, width, height) {
  this.inner = inner;
}
StretchCell.prototype.minWidth = function() {
  return this.inner.width;
}
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc)
// console.log(sc.minWidth()); // → 3
// console.log(sc.minHeight()); // → 2
// console.log(sc.draw(3, 2)); // → ["abc", "   "] Please feel free to rip this apart in a PR
