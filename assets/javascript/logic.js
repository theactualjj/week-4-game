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
 	targetScore = getRandom(19,120);

 	stockBroker.donnie.value = getRandom(1, 12);
 	stockBroker.jordan.value = getRandom(1, 12);
 	stockBroker.margot.value = getRandom(1, 12);
 	stockBroker.mark.value = getRandom(1, 12);

}


// Testing
console.log("----------------------------");
console.log("Target Score:" + targetScore);
console.log("Donnie: " + stockBroker.donnie.value + " | Jordan: " + 
	stockBroker.jordan.value + " | Margot: " + stockBroker.margot.value + " | Mark: " +
	stockBroker.mark.value);
console.log("----------------------------");
console.log("----------------------------");
//Change HTML


// Main Process
// --------------------------------------------
startGame();

$("#donnie").click(function() {
	alert("test");
});

$("#jordan").click(function() {
	alert("test");
});

$("#margot").click(function() {
	alert("test");
});

$("#mark").click(function() {
	alert("test");
});

