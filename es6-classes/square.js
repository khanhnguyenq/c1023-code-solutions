/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    this.area = this.width * this.width;
    this.perimeter = this.width * 4;
  }

  describe() {
    return `The area of the shape is ${this.area}.
    The perimeter of the shape is ${this.perimeter}.
    The width of the shape is ${this.width}.`;
  }
}

const nine = new Square(9);
console.log('nine:', nine);
console.log('nine.describe:', nine.describe());
