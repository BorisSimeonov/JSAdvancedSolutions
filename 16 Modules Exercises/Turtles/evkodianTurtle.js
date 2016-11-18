let Turtle = require('./turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodiumValue = Number(evkodiumValue);
    }

    get evkodium() {
        let densityValue = (this.gender === 'male') ?
        this.age * 3 : this.age * 2;
        return {
            value: this._evkodiumValue,
            density: densityValue
        }
    }
    toString() {
        let evkodium = this.evkodium;
        return super.toString() +
            `\nEvkodium: ${this.evkodium.value * this.evkodium.density}`;
    }
}

module.exports = EvkodianTurtle;