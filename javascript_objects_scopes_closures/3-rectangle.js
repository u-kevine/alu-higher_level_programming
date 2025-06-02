#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    if (this.width && this.height) {
      console.log(('X'.repeat(this.width) + '\n').repeat(this.height).trim());
    }
  }
}

module.exports = Rectangle;
