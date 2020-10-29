// declare class
class Shape {
    constructor() {
        this.color = "red";
    }

    drawShape() {
        console.log("Shape drawn");
    }

    calculateArea() {
        console.log("Shape area calculated");
    }
}

module.exports = Shape;
// export class using module.exports