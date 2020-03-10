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
	src.setAttribute(cards[cardId].cardImage);
	if (cardsInPlay >=2) {
	if (cardsInPlay[0] ===cardsInPlay[1]) {
		console.log("You have a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}

console.log(cardImage);
console.log(suit);

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', 'flipCard');
		document.querySelector('cardElement').appendChild('game-board');
	}
}

createBoard();

