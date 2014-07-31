//Pamela Craig
//7/30/14
//Wacky Function  
var partyCannon = prompt("How many guests (in tens between 10 and 50) will be at your party?"); 

while (partyCannon == " ") {
	//re-prompt user
	console.log ("How many guests (in tens between 10 and 50) will be at your party?");
}

if (partyCannon === 10)
	{console.log("Please stuff 10 cupcakes, 2 cakes, seven streamers and 3 tables into the party cannon. Blast off for a private party!"); 
}
 if (partyCannon === 20)
	{console.log ("Please stuff 20 cupcakes, 3 cakes, 10 streamers, 6 tables and a karaoke machine into the party cannon! Rock it out with your buds!"); 
}
 if (partyCannon === 30) 
	{console.log ("Please stuff 30 cupcakes, 4 cakes, 20 streamers, 8 tables, and a DJ into the party cannon! Have fun with the pony-folk!");
}
 if (partyCannon === 40) 
	{console.log ("Please stuff 40 cupcakes, 6 cakes, 30 streamers, 10 tables, 2 DJs, and the minibar into the party cannon! Have fun with the party!");
}
 if (partyCannon === 50) 
	{console.log ("Please stuff 50 cupcakes, 8 cakes, 46 streamers, 12 tables, the DJ, dance floor, and one full bar into the party cannon! Watch your drink, though....");
}