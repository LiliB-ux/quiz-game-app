const question = {
text: "What does HTML stand for?",
answers: {
A: "Hyper Text Markup Language",
B: "Home Tool Markup Language",
C: "Hyperlinks and Text Mark Language",
D: "Hyper Transfer Machine Language"
},
correct: "A"
};

document.getElementById("question").innerHTML = question.text;

const buttons = document.querySelectorAll("#answers button");

buttons[0].innerHTML = question.answers.A;
buttons[1].innerHTML = question.answers.B;
buttons[2].innerHTML = question.answers.C;
buttons[3].innerHTML = question.answers.D;

function checkAnswer(answer){
if(answer === question.correct){
document.getElementById("result").innerHTML = "Correct!";
}else{
document.getElementById("result").innerHTML = "Wrong answer.";
}
}
