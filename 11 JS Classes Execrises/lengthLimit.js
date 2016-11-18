class Stringer {
    constructor(string, initialLength) {
        if(typeof string !== "string") {
            string = string.toString();
        }
        if(typeof initialLength !== "number") {
            initialLength = 0;
        } else {
            initialLength = Math.trunc(initialLength);
        }

        if(initialLength < 0) {
            initialLength = 0;
        }

        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        if(typeof length === "number") {
            if(this.innerLength + length < 0) {
                this.innerLength = 0;
            } else {
                this.innerLength += length;
            }
        }
    }

    decrease(length) {
        if(typeof length === "number") {
            if(this.innerLength - length < 0) {
                this.innerLength = 0;
            } else {
                this.innerLength -= length;
            }
        }
    }

    toString() {
        if (this.innerLength == 0) {
            return '.'.repeat(3);
        }else {
            return this.innerString
                    .substr(0, this.innerLength) +
                '.'.repeat(3);
        }
    }
}

//For testing purposes
let string = new Stringer("Iva", 7);
string.increase(-6);
console.log(string.toString());
string.increase(12);
console.log(string.toString());