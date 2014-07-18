//Pamela Craig WPF 
//WDD144-O sec 01 
//Wacky Expression//
var totalSafedrops = 350;
//How much money did you drop into the safe over the course of the night
var beginningTotal = 119.23;
//How much money did you have in your register at the beinging of your shift
var endingTotal = 201.76
//How much money did you leave the next shift in the register
var EndOfDayTotal = (totalSafedrops - beginningTotal )+ (endingTotal);
//This is your end of day total
console.log (EndOfDayTotal)
//This is how you check it online