const quizData = [
  { word: "Eloquent", correct: "Fluent or persuasive in speaking", options: [
    "Fluent or persuasive in speaking",
    "Very angry",
    "Easy to believe",
    "Confusing or unclear"
  ]},
  { word: "Vast", correct: "Very large", options: [
    "Very small",
    "Very large",
    "Average size",
    "Dry or empty"
  ]},
  { word: "Reluctant", correct: "Unwilling", options: [
    "Excited",
    "Unwilling",
    "Hungry",
    "Confused"
  ]},
  { word: "Fragile", correct: "Easily broken", options: [
    "Strong",
    "Easily broken",
    "Expensive",
    "Useful"
  ]},
  { word: "Benevolent", correct: "Kind and generous", options: [
    "Mean",
    "Kind and generous",
    "Serious",
    "Lazy"
  ]},
];

let index = 0;
let score = 0;
let selectedOption = null;

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");

function startQuiz() {
  index = 0;
  score = 0;

  document.getElementById("resultContainer").style.display = "none";
  document.getElementById("questionContainer").style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  nextBtn.disabled = true;
  selectedOption = null;

  const q = quizData[index];
  questionText.textContent = `What does "${q.word}" mean?`;

  optionsContainer.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;

    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedOption = opt;
      nextBtn.disabled = false;
    };

    optionsContainer.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === quizData[index].correct) score++;

  index++;

  if (index < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("resultContainer").style.display = "block";

  document.getElementById("scoreText").textContent = `${score} / ${quizData.length}`;
}

startQuiz();
