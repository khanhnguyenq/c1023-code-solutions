/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.area = this.radius * this.radius * Math.PI;
    this.perimeter = this.radius * Math.PI * 2;
  }

  describe() {
    return `The area of the shape is ${this.area}.
    The perimeter of the shape is ${this.perimeter}.
    The radius of the shape is ${this.radius}.`;
  }
}

const five = new Circle(5);
console.log('five.describe():', five.describe());
