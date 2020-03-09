const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] ===cardsInPlay[1]) {
		console.log("You have a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}
flipCard(0);
flipCard(2);

console.log(cardImage);
console.log(suit);
