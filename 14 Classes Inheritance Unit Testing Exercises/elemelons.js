function getMelonClasses() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Class Melon is abstract and cannot be instanced.");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }

        get elementInbdex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${ this.element }\nSort: ${this.melonSort}\nElement Index: ${ this.elementInbdex }`;
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Fire";
        }

        get elementInbdex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${ this.element }\nSort: ${this.melonSort}\nElement Index: ${ this.elementInbdex }`;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Air";
        }

        get elementInbdex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${ this.element }\nSort: ${this.melonSort}\nElement Index: ${ this.elementInbdex }`;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Earth";
        }

        get elementInbdex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${ this.element }\nSort: ${this.melonSort}\nElement Index: ${ this.elementInbdex }`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
            this.morphElements = ["Fire", "Earth", "Air", "Water"];
        }

        morph() {
            this.element = this.morphElements.shift();
            this.morphElements.push(this.element);
        };
    }

    return {
        Melon : Melon,
        Watermelon : Watermelon,
        Firemelon : Firemelon,
        Earthmelon : Earthmelon,
        Airmelon : Airmelon,
        Melolemonmelon : Melolemonmelon
    }
}

let melonBuilder = getMelonClasses();
//let test = new Melon(100, "Test");
//Throws error

let watermelon = new melonBuilder.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString() + '\n');

// Element: Water
// Sort: Kingsize
// Element Index: 100

let melolemonmelon = new melonBuilder.Melolemonmelon(12.5, "Kingsize");
melolemonmelon.morph();
console.log(melolemonmelon.toString());