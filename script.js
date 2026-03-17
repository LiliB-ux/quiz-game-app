const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Mark Language",
      "Hyper Transfer Machine Language"
    ],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Style Sheets"
    ],
    correct: 1
  },
  {
    question: "Which language is used to make webpages interactive?",
    answers: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correct: 2
  },
  {
    question: "Which tag is used for the largest heading in HTML?",
    answers: [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    correct: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      "//",
      "/*",
      "#",
      "<!--"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll("#answers button");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  answerButtons.forEach((button, index) => {
    button.textContent = q.answers[index];
    button.disabled = false;
    button.style.backgroundColor = "";
  });

  scoreEl.textContent = `Score: ${score}`;
}

function checkAnswer(index) {
  if (answered) return;

  answered = true;
  const q = questions[currentQuestion];

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  if (index === q.correct) {
    resultEl.textContent = "Correct!";
    score++;
    answerButtons[index].style.backgroundColor = "#b9f6ca";
  } else {
    resultEl.textContent = "Wrong answer.";
    answerButtons[index].style.backgroundColor = "#ffcccb";
    answerButtons[q.correct].style.backgroundColor = "#b9f6ca";
  }

  scoreEl.textContent = `Score: ${score}`;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionEl.textContent = "Quiz Complete!";
  resultEl.textContent = `You scored ${score} out of ${questions.length}.`;
  document.getElementById("answers").innerHTML = `
    <button onclick="restartQuiz()">Play Again</button>
  `;
  nextBtn.style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("answers").innerHTML = `
    <button onclick="checkAnswer(0)"></button>
    <button onclick="checkAnswer(1)"></button>
    <button onclick="checkAnswer(2)"></button>
    <button onclick="checkAnswer(3)"></button>
  `;

  location.reload();
}

loadQuestion();
