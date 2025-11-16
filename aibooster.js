/* LOGIN */
const user = JSON.parse(localStorage.getItem("userData"));
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn || !user) window.location.href = "login.html";
document.getElementById("usernameDisplay").textContent = user.name + " ▼";

/* PROFILE DROPDOWN */
const profileBtn = document.querySelector(".profile-btn");
const profileMenu = document.querySelector(".profile-menu");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});

/* LOGOUT */
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});


/* ========================= WORD OF THE DAY ========================= */
const words = [
  { word: "Resilient", def: "Able to withstand or recover quickly from difficulties.", ex: "She is resilient in challenging situations." },
  { word: "Clarity", def: "The quality of being clear and easy to understand.", ex: "His explanation lacked clarity." },
  { word: "Adapt", def: "To adjust to new conditions.", ex: "Humans adapt to different environments." },
  { word: "Elevate", def: "To raise something to a higher level.", ex: "This course will elevate your speaking skills." }
];

function loadWord() {
  let w = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").textContent = w.word;
  document.getElementById("definition").textContent = w.def;
  document.getElementById("example").textContent = "Example: " + w.ex;
}

document.getElementById("newWordBtn").addEventListener("click", loadWord);
loadWord();


/* ========================= AI WORD GENERATION ========================= */
document.getElementById("generateBtn").addEventListener("click", () => {
  const topic = document.getElementById("topicInput").value.trim();
  const output = document.getElementById("generatedWords");

  if (!topic) {
    output.innerHTML = "<p>Please enter a topic.</p>";
    return;
  }

  output.innerHTML = `
    <h3>AI-Generated Words for "${topic}"</h3>
    <ul>
      <li><strong>Articulate</strong> – express clearly</li>
      <li><strong>Perspective</strong> – point of view</li>
      <li><strong>Engage</strong> – participate or become involved</li>
      <li><strong>Emphasize</strong> – highlight importance</li>
      <li><strong>Refine</strong> – improve gradually</li>
    </ul>
  `;
});


/* ========================= SAVED WORDS ========================= */
let saved = JSON.parse(localStorage.getItem("savedWords")) || [];

function renderSaved() {
  let grid = document.getElementById("savedGrid");
  grid.innerHTML = "";

  saved.forEach(w => {
    let card = document.createElement("div");
    card.classList.add("saved-card");
    card.innerHTML = `
      <h3>${w.word}</h3>
      <p>${w.def}</p>
    `;
    grid.appendChild(card);
  });
}

renderSaved();
