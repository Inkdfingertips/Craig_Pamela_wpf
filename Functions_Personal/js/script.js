var period = prompt("On a scale from 1 to 10 how heavy is your period today?");
//prompts user on the smount of flow they are experiancing 

if (period == 1 || 2 || 3 ){
	console.log ("You need a light tampon and a good book");
}
//1-3 and you fall under the light catagory 
 else if(period == 4 || 5 || 6){
	console.log ("You need a regular tampon and a romantic comedy");
}
//4-6 and you fall into the medium catagory
else if (period == 7 || 8 || 9){
	console.log ("You need a super tampon. In case of depression or sadness phone a friend");
}
//7-9 and you fall into the heavy catagory
else if(period == 10){
 	console.log ("You need a super plus tampon. Resist the urge to kill by staying indoors with chocolate and Judge shows");
 //10 welcome to the super plus zone
}
 else {
console.log ("Get your heating pad and Midol ready girl, its going to be a rough ride. Just curl up in bed and sleep. Cry in times of consciousness.");
}
//Beyond that you're on your own