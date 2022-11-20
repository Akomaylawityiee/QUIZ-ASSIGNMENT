
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	
	var correct = 0;


	if (question1 == "B. Hyper Text Markup Language") {
		correct++;
}
	if (question2 == "B. Black") {
		correct++;
}	
	if (question3 == "B. Cascading Style Sheets") {
		correct++;
}

	if (question4 == "B. HTML") {
		correct++;
}   
    if (question5 == "B. CSS") {
		correct++;
}   
    if (question6 == "B. Yes") {
		correct++;
}   
    if (question7 == "B. To Add comment") {
		correct++;
}   
    if (question8 == "B.Make a text bold") {
		correct++;
}   
    if (question9 == "B. It's for Paragraph") {
		correct++;
}   
    if (question10 == "B. CSS") {
		correct++;
}
	
	
	
	
	var messages = ["Well done!", "Hey! That's a good score", "Grades are just numbers" , "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 5) {
		score = 2;
	}
	
    if (correct > 5 && correct < 9) {
		score = 1;

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("result").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	} 
	