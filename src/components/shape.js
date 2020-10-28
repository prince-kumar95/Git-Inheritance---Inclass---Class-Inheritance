// declare class
export default class Shape {
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
// export class using module.exports