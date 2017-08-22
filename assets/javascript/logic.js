// Global Variables
// --------------------------------------------
// Need to track value of brokers each round
// Need to crack current and target score 
// Need to track Win & Loss Count

// Stockbroker Variables
var stockBroker = {
	donnie:
	{
		name: "donnie",
		value: 0	
	},
	jordan:
	{
		name: "jordan",
		value: 0	
	},
	margot:
	{
		name: "margot",
		value: 0	
	},
	mark:
	{
		name: "mark",
		value: 0	
	},

};


//var donnie = 0;
//var jordan = 0;
//var margot = 0;
//var mark = 0;

// SCores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// Functions
// --------------------------------------------

	//Get random numbers
 var getRandom = function(min,max) {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }


 // Start game and reset values
 var startGame = function(){

 	//Reset current score
 	var currentScore = 0;

 	// Set target score between 19 -120
 	targetScore = getRandom(15, 150);

 	stockBroker.donnie.value = getRandom(1, 12);
 	stockBroker.jordan.value = getRandom(1, 12);
 	stockBroker.margot.value = getRandom(1, 12);
 	stockBroker.mark.value = getRandom(1, 12);

}


// Testing

console.log("Target Score:" + targetScore);
console.log("Donnie: " + stockBroker.donnie.value + " | Jordan: " + 
	stockBroker.jordan.value + " | Margot: " + stockBroker.margot.value + " | Mark: " +
	stockBroker.mark.value);

//Change HTML
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);


// Respond to clicks on brokers
	var addValues = function(stockBroker) {

		// Change current score
		currentScore = currentScore + stockBroker.value;

		//change HTML to change current score
		$("#yourScore").html = (currentScore);
	}

// Testing Console
	console.log("Your Score:" + currentScore);

	// Check if won or lost and reset game
	var checkWin = function() {
		// check if current score is greater than target score
		if (currentScore > targetScore) {
			alert("Margin Call!!! You are broke!");
			console.log("Loser");

			// Add to Loss counter
			lossCount++;

			// Change Loss Count HTML
			$("#lossCount").html(lossCount);

		}

		else if (currentScore == targetScore) {
			alert("MONAYYY!! You are the WOLF OF WALL STREET!!");
			console.log("You Won!");

			// Add to win counter
			winCount++;

			// Change Win Count HTML
			$("#winCount").html(winCount);
		}

	}

// Main Process
// --------------------------------------------
startGame();

$("#donnie").click(function() {
	addValues(stockBroker.donnie);
});

$("#jordan").click(function() {
	addValues(stockBroker.jordan);
});

$("#margot").click(function() {
	addValues(stockBroker.margot);
});

$("#mark").click(function() {
	addValues(stockBroker.mark);
});

