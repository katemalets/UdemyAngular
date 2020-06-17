import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let shape = new Shape(4,6);
let circle = new Circle(2,3, 9);
let rectangle = new Rectangle(4,7,56,32);

let shapes : Shape[] = [];

shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
}

