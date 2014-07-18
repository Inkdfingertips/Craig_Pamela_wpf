//Pamela Craig WPF 
//WDD144-O sec 01 
//Industry Expression//
var totalSafeDrops = 750;
//how much money have you dropped in the safe//
var beginningCount = 101.62;
//how much did your register have in it at the beginning your shift//
var endingCount = 197.80;
//how much didi your register have at the end of your shift//
var creditandDebitTotal =143.19;
//how much was your crdit card and debet card total//
var foodstamps= 4.45;
//how much was your foodstamp total//
var coupons = 1.00;
//total coupons//
var lottopayout = 60.00;
//how much money did you give out thanks to lottery//
var totalmoney = (totalSafeDrops - beginningCount + endingCount) + 
(creditandDebitTotal + foodstamps +coupons +lottopayout);
var mopSales = 560;
//What you should have come up with//
var cashOverOrShort =("This is what you are short or over \n" ) +  (totalmoney - mopSales);
//what you should have come up with vs how much you actually came up with//
console.log (cashOverOrShort)