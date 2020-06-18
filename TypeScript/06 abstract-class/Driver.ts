import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let circle = new Circle(2,3, 9);
let rectangle = new Rectangle(4,7,56,32);

let shapes : Shape[] = [];

shapes.push(circle);
shapes.push(rectangle);

for(let shape of shapes){
    console.log(shape);
    console.log("Info = " + shape.getInfo());
    console.log("Area = " + shape.calculateArea());
}

