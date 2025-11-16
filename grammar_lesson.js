/* LOGIN CHECK */
const user = JSON.parse(localStorage.getItem("userData"));
document.getElementById("usernameDisplay").textContent = user.name + " ▼";

/* PROFILE MENU */
const profileBtn = document.querySelector(".profile-btn");
const profileMenu = document.querySelector("#profileMenu");
profileBtn.onclick = () => profileMenu.classList.toggle("show");
document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});

/* LOGOUT */
document.getElementById("logoutBtn").onclick = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
};


/* GRAMMAR LESSON DATA */
const lessons = {
  tenses: {
    title: "Verb Tenses",
    content: "Tenses show the time of an action. English has 12 tenses.",
    examples: [
      "✔ I eat breakfast at 8 AM. (Present Simple)",
      "✔ She was studying last night. (Past Continuous)",
      "✔ They will arrive tomorrow. (Future Simple)"
    ],
    quiz: [
      {
        q: "Which tense is used for daily habits?",
        options: ["Present Simple", "Past Simple", "Future Perfect"],
        answer: 0
      },
      {
        q: "Which tense is correct? 'She ___ cooking.'",
        options: ["was", "were", "be"],
        answer: 0
      }
    ]
  },

  articles: {
    title: "Articles",
    content: "Articles define nouns: 'a', 'an', and 'the'.",
    examples: [
      "✔ I saw a dog. (Any dog)",
      "✔ Please close the door. (Specific door)",
      "✔ She ate an apple. (Starts with vowel sound)"
    ],
    quiz: [
      {
        q: "Choose the correct article: '___ apple a day keeps the doctor away.'",
        options: ["A", "An", "The"],
        answer: 1
      }
    ]
  }
};


/* LOAD LESSON */
document.getElementById("loadLessonBtn").onclick = () => {
  const key = document.getElementById("topicSelect").value;
  const box = document.getElementById("lessonBox");
  const topic = lessons[key];

  if (!topic) {
    box.innerHTML = "<h2>Please select a valid topic.</h2>";
    return;
  }

  document.getElementById("lessonTitle").textContent = topic.title;
  document.getElementById("lessonContent").textContent = topic.content;

  const examplesDiv = document.getElementById("examples");
  examplesDiv.innerHTML = "<h3>Examples</h3><ul>" +
    topic.examples.map(e => `<li>${e}</li>`).join("") +
  "</ul>";

  document.getElementById("showQuizBtn").style.display = "block";

  window.currentQuiz = topic.quiz;
  window.quizIndex = 0;
};


/* QUIZ */
document.getElementById("showQuizBtn").onclick = () => {
  document.getElementById("quizSection").style.display = "block";
  loadQuiz();
};

function loadQuiz() {
  const q = currentQuiz[quizIndex];

  document.getElementById("quizQuestion").textContent = q.q;

  const container = document.getElementById("quizOptions");
  container.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.classList.add("quiz-option");
    btn.textContent = opt;

    btn.onclick = () => {
      document.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
      btn.classList.add("selected");
      document.getElementById("nextQuestionBtn").disabled = false;
      window.selectedAnswer = i;
    };

    container.appendChild(btn);
  });
}

document.getElementById("nextQuestionBtn").onclick = () => {
  if (selectedAnswer === currentQuiz[quizIndex].answer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }

  quizIndex++;

  if (quizIndex >= currentQuiz.length) {
    alert("Quiz Finished!");
    document.getElementById("quizSection").style.display = "none";
    return;
  }

  loadQuiz();
  document.getElementById("nextQuestionBtn").disabled = true;
};
