let cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = [0];
cardsInPlay.push(cardOne);
console.log("the user flipped the queen!");
var cardTwo = [2];
cardsInPlay.push(cardTwo);
console.log("the user flipped the king!");

if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a Match!");
	}else{
		alert("Sorry, try again.");
	} 

	}

