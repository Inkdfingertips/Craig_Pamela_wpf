//Pamela Craig WPF 
//WDD144-O sec 01 
//Personal Expression//
var personalCoffeCup = 1;
//Number of cups of coffee you've had at home//
var workCoffeeCup = 2;
//number of coffee cups you've had at work//
var toGoCofeeCup = 2
//number of coffee cups you've had at to-go//
var ouncesOfCoffeeForpersdonal= 16;
//The ounces in of your persional cup//
var ouncesOfCoffeeForWork = 32;
//The ounces of your work up//
var ouncesOfCoffeeForToGo = 24;
//The ounces of your to-go Starbucks cup//
var days = 6;
//numnber of days you've existed on coffee//
var cupTotal = (personalCoffeCup + workCoffeeCup + toGoCofeeCup);
//total number of your cups//
var ounceTotal = (ouncesOfCoffeeForpersdonal + ouncesOfCoffeeForWork + ouncesOfCoffeeForToGo);
//total number of your ounces//
var total = (cupTotal * ounceTotal * days);
//ounces times cups, ounces, and days is your total//
console.log ("The total number of ounces you've drank this week is:\n" + total);