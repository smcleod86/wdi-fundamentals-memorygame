const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] ===cardsInPlay[1]) {
		console.log("You have a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard (cardId) {
	console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}
flipCard(0);
flipCard(2);


