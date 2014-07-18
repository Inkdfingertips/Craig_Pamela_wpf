//Pamela Craig WPF 
//WDD144-O sec 01 
//Industry Expression//
var totalSafeDrops = 750;
var beginningCount = 101.62;
var endingCount = 197.80;
var creditandDebitTotal =143.19;
var foodstamps= 4.45;
var coupons = 1.00;
var lottopayout = 60.00;
var totalmoney = (totalSafeDrops - beginningCount + endingCount) + 
(creditandDebitTotal + foodstamps +coupons +lottopayout);
var mopSales = 560;
var cashOverOrShort =("This is what you are short or over \n" ) +  (totalmoney - mopSales);
console.log (cashOverOrShort)