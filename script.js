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
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");
const answersContainer = document.getElementById("answers");

function loadQuestion() {
  answered = false;
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  scoreEl.textContent = `Score: ${score}`;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  answersContainer.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersContainer.appendChild(button);
  });
}

function checkAnswer(index) {
  if (answered) return;

  answered = true;
  const q = questions[currentQuestion];
  const buttons = answersContainer.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (index === q.correct) {
    resultEl.textContent = "Correct!";
    score++;
    buttons[index].style.backgroundColor = "#b9f6ca";
  } else {
    resultEl.textContent = "Wrong answer.";
    buttons[index].style.backgroundColor = "#ffcccb";
    buttons[q.correct].style.backgroundColor = "#b9f6ca";
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
  progressEl.textContent = "Finished";
  questionEl.textContent = "Quiz Complete!";
  
  let message = "";
  if (score === questions.length) {
    message = "Perfect score — excellent work!";
  } else if (score >= 3) {
    message = "Nice job — solid result.";
  } else {
    message = "Good try — keep practicing.";
  }

  resultEl.textContent = `You scored ${score} out of ${questions.length}. ${message}`;

  answersContainer.innerHTML = `<button onclick="restartQuiz()">Play Again</button>`;
  nextBtn.style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();
