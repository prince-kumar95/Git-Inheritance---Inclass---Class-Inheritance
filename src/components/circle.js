// import using require
const Shape = require('./shape');

class Circle extends Shape{
    constructor() {
        super();
    }
    
    calculateArea() {
        console.log("Circel Area with color " + this.color + " calculated");
        return 3.14 * 5 * 5;
    }
}
// declare class
module.exports = Circle;

// export class using module.exports