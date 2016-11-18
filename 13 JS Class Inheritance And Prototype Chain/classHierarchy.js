function result() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError("Cannot construct Figure instance. (abstract class)");
            }
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() +
                ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() +
                ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let ctor = result();

try {
    let f = new ctor.Figure();       //Error
} catch (e) {
    console.log(e.message);
}
let c = new ctor.Circle(5);
console.log(c.area);                //78.53981633974483
console.log(c.toString());          //Circle - radius: 5
let r = new ctor.Rectangle(3, 4);
console.log(r.area);                //12
console.log(r.toString());          //Rectangle - width: 3, height: 4
