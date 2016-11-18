class Rat {
    constructor(name) {
        this.name = name;
        this.unitedWith = [];
    }
    unite(allyRat) {
        if(allyRat.constructor.name === 'Rat') {
            this.unitedWith.push(allyRat);
        }
    }
    getRats() {
        return this.unitedWith;
    }
    toString() {
        let result = this.name;
        this.unitedWith.forEach((rat) => {
           result += `\n##${rat.name}`;
        });
        return result;
    }
}

//for testing purposes
let ratBoss = new Rat('Ratatui');
ratBoss.unite(new Rat('Blacky'));
ratBoss.unite(new Rat('Sparky'));

console.log(ratBoss.getRats());
console.log(ratBoss.toString());