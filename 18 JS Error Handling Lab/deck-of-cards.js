function printDeckOfCards(cardArray) {
    class Card {
        constructor(face, suit) {
            try {
                this.face = face;
                this.suit = suit;
            } catch (ex) {
                throw new Error(`Invalid card: ${face + suit}`);
            }
        }

        set face(face) {
            let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            if (!Faces.includes(face)) {
                throw new Error;
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
            if (!Suits[suit]) {
                throw new Error;
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
    let result = [];

    try {
        cardArray.forEach(card => {
            let cardParts = card.split('');
            let suit = cardParts.pop();
            let face = cardParts.join('');
            result.push(new Card(face, suit));
        });
        console.log(result.join(' '));
    } catch (e) {
        console.log(e.message);
    }
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['AS', '10D', 'KH', '2C']);
