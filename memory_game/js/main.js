var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
cardsInPlay.push(cards[cardOne]);
console.log("the user flipped " + cardsInPlay);
var cardTwo= [1];
cardsInPlay.push(cards[cardTwo]);

console.log("the user flipped" + cardsInPlay);

if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a Match!");
	}else{
		alert("Sorry, try again.")
	} 

	}

