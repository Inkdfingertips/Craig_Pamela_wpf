//Pamela Craig
//7/30/14
//Wacky Function  
var partyCannon = prompt("How many guests (at least ten) will be at your party?"); 

//while (partyCannon == " ") {
	//re-prompt user
	//console.log ("How many guests (at least ten) will be at your party?");

	function calculatePartyCannon ( partyCannon )
	{
		var stuff = ("Please stuff " + partyCannon +"cupcakes" + partyCannon/5 + "cakes" + partyCannon/2 +"streamers" + partyCannon/5 + "tables into the party cannon. Have a good time!");
		return stuff;
	}