let result = (() => {
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        set face(face) {
            if(!Faces.includes(face)) {
                throw new Error("Invalid face value: " + face);
            }
            this._face = face;
        }

        set suit(suit) {
            if(!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid suit value: " + suit);
            }
            this._suit = suit;
        }

        get face() {
            return this._face;
        }
        get suit() {
            return this._suit;
        }
        toString() {
            return { face: this.face, suit: this.suit };
        }
    }

    return {
        Card : Card,
        Suits: Suits
    };
})();

//For testing purposes
let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;

console.log(card.toString());

//Throws error (no face value '1')
//let card2 = new Card("1", Suits.DIAMONDS);