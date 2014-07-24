//Pamela Craig, 
//7/24/14
//Personal Conditional

var paycheck = prompt("How much was your paycheck?");
//prompts user for paycheck amount
var panicAtTheDiscoConcert = 200;
//is a concert and is expensive
var fallOutBoyConcert = 335;
//is even more expensive
var borrowedFromMom = 100;
//desperate times call for desperate measures, right?
if (paycheck > (fallOutBoyConcert + borrowedFromMom) ){
	console.log ("Have fun in Death Valley with Fall Out Boy");
//if the paycheck is more than the FOB concert plus moms money you can go to the more expensive concert
if (paycheck > (panicAtTheDiscoConcert + borrowedFromMom) ){
	console.log ("Enjoy Vegas Lights at the Panic Concert");
	//If your paycheck is less that the FOB concert plus moms money, than enjoy Brendon Urie, he's just as good
} else{
	console.log("Sorry sweetie, no concert for you.");
}
}


