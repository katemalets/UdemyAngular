import {Shape} from "./Shape";
export class Circle extends Shape{

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
    constructor(theX: number,
                theY: number,
                private _radius : number) {
        super(theX, theY);
    }

    get radius() : number{
        return this._radius;
    }

    set radius(value){
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + " Radius = " + this._radius;
    }

}