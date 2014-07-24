var lotteryNumber = prompt("Please enter a number between 1 and 100"); 
//this is a fixed lottery lotteryNumber
todaysNumbers = [Math.floor (Math.random()*100) +1,Math.floor (Math.random()*100) +1, Math.floor (Math.random()*100) +1, Math.floor (Math.random()*100) +1];
//This generates a random number, if 72 hits you win.
console.log ("Your Numbers Are:" + todaysNumbers);
var loopCounter = 0;
//this is where the loop starts
while (loopCounter < 5)
//we only have four numbers for the customer to play at a time. Ths is less than five
{var test = 0;
	//var used for testing array vs lotteryNumber
if (lotteryNumber == todaysNumbers [test]) {
	console.log ("Early Retirement ahead!")
} //if lottery number and todays number are the same you win.
else {console.log ("Sorry Not this time.") 
	test++}
//If not buy another ticket
loopCounter++;}
//This counts up the loop