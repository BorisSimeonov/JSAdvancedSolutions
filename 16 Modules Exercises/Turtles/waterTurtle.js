let Turtle = require('./turtle');

class WaterTurtle extends Turtle {
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._waterPool = waterPool;
    }

    get currentWaterPool() {
        return this._waterPool;
    }

    travel(waterPool) {
        this._waterPool = waterPool;
        super.grow(5);  //value 5 - by requirement
    }

    toString() {
        return super.toString() +
                `\nCurrently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;
