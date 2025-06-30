// @ts-ignore
let suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
// @ts-ignore
let values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

type deckCard = { cardSuit: string, value: string, color: string };
// @ts-ignore
let deck: deckCard[] = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}

// @ts-ignore
let spadeAce: any = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Spade Ace:', spadeAce);


let allSixes: any = deck.filter(card => card.value === '6');
console.log('All Sixes:', allSixes);

let redCards: any[] = deck.filter(card => card.color === 'red');
console.log('All Red Cards:', redCards);

let diamonds: any[] = deck.filter(card => card.cardSuit === 'diamond');
console.log('All Diamonds:', diamonds);

let highClubs: any[] = deck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log('All Clubs from 9 and above:', highClubs);



