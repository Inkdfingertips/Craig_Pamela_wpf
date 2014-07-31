//Pamela Craig
//7/30/14
//Industry Funtion
var change = prompt ("Please enter the change due to the customer.");
//This prompts user to enter the change that is due to the customer
var quarters = change/25;
var afterQuarterChange = change%25;
var dimes = afterQuarterChange/10;
var afterDimeChange = afterQuarterChange%10;
var nickels = afterDimeChange/ 5;
var afterNickelChange = afterDimeChange%5;
var pennies = afterNickelChange;
//insert every variable known to man above
console.log ("your change will be " + Math.floor(quarters) + " quarters, " + Math.floor(dimes) + " dimes, " + Math.floor(nickels) + " nickels and " + Math.floor(pennies) + " pennies.")
//math.floor takes away the decimal and percents. Man, this one took awhile