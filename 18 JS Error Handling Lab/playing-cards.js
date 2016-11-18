class Card {
    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }

    set face(face) {
        let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if(!Faces.includes(face)) {
            throw new Error("Invalid face value: " + face);
        }
        this._face = face;
    }

    set suit(suit) {
        let Suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        if(!Suits[suit]) {
            throw new Error("Invalid suit value: " + suit);
        }
        this._suit = Suits[suit];
    }

    get face() {
        return this._face;
    }
    get suit() {
        return this._suit;
    }
    toString() {
        return `${this.face}${this.suit}`;
    }
}



console.log('' + new Card('A', 'S'));
console.log('' + new Card('A', '2')); //Error: invalid suit