var lotteryNumber = 72; 
//this is a fixed lottery lotteryNumber
todaysNumbers = [Math.floor (Math.random()*100) +1,Math.floor (Math.random()*100) +1, Math.floor (Math.random()*100) +1, Math.floor (Math.random()*100) +1];
//This generates a random number, if 72 hits you win.
console.log ("Your Numbers Are:" + todaysNumbers);
var loopCounter = 0;
//this is where the loop starts
while (loopCounter < 5)
//we only have four numbers for the customer to play at a time. Ths is less than five
{var test = 0;
if (lotteryNumber == todaysNumbers [test]) {
	console.log ("Early Retirement ahead!")
}
else {test++}
loopCounter++;}
//This counts up the loop