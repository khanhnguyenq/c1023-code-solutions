/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius * radius * Math.PI, radius * Math.PI * 2);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}.
    The radius of the shape is ${this.radius}.`;
  }
}

const five = new Circle(5);
console.log('five.describe():', five.describe());
