/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area of the shape is ${this.area}.
    The perimeter of the shape is ${this.perimeter}.`;
  }
}

const newShape = new Shape();
console.log('newShape.descibe():', newShape.describe());
