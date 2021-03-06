var TextCell = require("./src/constructors"); // i wanted to try importing a file, unfortunately I didn't know that NodeJS does not support 'import' quite yet. Until then I'm stuck with this ugly require statement, I'm not even sure if this is best practice, but it works and I can live with that. Please feel free to rip this apart in a PR
/*
 Implement a cell type named StretchCell(inner, width, height)
 It should wrap another cell and ensure that the resulting cell has at least the given width and height, 
 even if the inner cell would naturally be smaller.
 */

 function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
}

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
}

StretchCell.prototype.draw = function() {
  return this.inner.draw(this.width, this.height);
}
