// @ts-ignore
let suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
// @ts-ignore
let values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type deckCard1 = { cardSuit: string, value: string, color: string };
// @ts-ignore
let deck: deckCard1[] = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}

interface Accumulator {
    spades: any[];
    diamonds: any[];
    hearts: any[];
    clubs: any[];
}


let groupedBySuit = deck.reduce((suit:Accumulator, card) => {
    if (card.cardSuit === 'spade') {
        // @ts-ignore
        suit.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        // @ts-ignore
        suit.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        // @ts-ignore
        suit.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        // @ts-ignore
        suit.clubs.push(card);
    }
    return suit;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedBySuit);