// import using require
import Shape from "./shape";

export default class Circle extends Shape{
    constructor() {
        super();
    }
    
    calculateArea() {
        console.log("Circel Area with color " + this.color + " calculated");
        return 3.14 * 5 * 5;
    }
}
// declare class


// export class using module.exports