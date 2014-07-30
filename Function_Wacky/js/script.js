var sentence = prompt("Please type a funny sentence.");
var length1= sentence.length();
var digit = 1;
var character = sentence.charAt(digit);

while (sentence === ""){
sentence = prompt("Please type a funny sentence.");
}
while (digit<length1){
	console.log(sentence.charAt(digit) + " ");
	digit=digit+2;
}
console.log(" ");
var letter=0;
while (letter<length1){
	if (sentence.charAt(letter)=="a") {Console.log("_");}
	else if (sentence.charAt(letter)=="e") {Console.log("_");}
	else if (sentence.charAt(letter)=="i") {Console.log("_");}
	else if(sentence.charAt(letter)=="o") {Console.log("_");}
	else if (sentence.charAt(letter)=="u") {Console.log("_");}
	else {Console.log(sentence.chatAt(letter));}
	letter++;
}
letter=0;
Console.log(" ");
while (letter<length1) {
	if (sentence.charAt(letter) == "t") {Console.log("x");}
	else {Console.log(sentence.charAt(letter)); 
} 
letter ++;
}
