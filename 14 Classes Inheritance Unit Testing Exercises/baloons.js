function buildBaloonModule() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon() {
            return this._ribbon;
        }

        set ribbon(ribbonObj) {
            return this._ribbon = ribbonObj;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }

        set text(newText) {
            this._text = newText;
        }
    }

    return {
        Balloon : Balloon,
        PartyBalloon : PartyBalloon,
        BirthdayBalloon : BirthdayBalloon
    }
}

let baloonModule = buildBaloonModule();

let partyOne = new baloonModule.BirthdayBalloon("green", 12.33, "yellow", 60, "Happy 148-th birthday.");

console.log(partyOne);