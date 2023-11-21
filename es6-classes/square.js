/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()}.
    The width of the shape is ${this.width}`;
  }
}

const nine = new Square(9);
console.log('nine.describe:', nine.describe());
