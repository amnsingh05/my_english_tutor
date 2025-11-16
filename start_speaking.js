/* LOGIN CHECK */
const user = JSON.parse(localStorage.getItem("userData"));
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn || !user) window.location.href = "login.html";
document.getElementById("usernameDisplay").textContent = user.name + " ▼";

/* PROFILE MENU */
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
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});


/* ---------------- SPEAKING PROMPTS ---------------- */
const prompts = [
  "Describe your favorite memory.",
  "Explain a goal you want to achieve this year.",
  "Talk about a person who inspires you.",
  "What is a challenge you recently overcame?",
  "Describe your perfect day."
];

document.getElementById("generatePromptBtn").addEventListener("click", () => {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("promptText").textContent = random;
});


/* ---------------- AUDIO RECORDER ---------------- */
let mediaRecorder;
let audioChunks = [];
let recording = false;
let time = 0;
let timerInterval;

const recordBtn = document.getElementById("recordBtn");
const stopBtn = document.getElementById("stopBtn");
const timer = document.getElementById("timer");
const audioPreview = document.getElementById("audioPreview");

recordBtn.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();
  recording = true;

  recordBtn.disabled = true;
  stopBtn.disabled = false;

  audioChunks = [];
  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

  // timer
  timerInterval = setInterval(() => {
    time++;
    timer.textContent = formatTime(time);
  }, 1000);
};

stopBtn.onclick = () => {
  if (!recording) return;

  mediaRecorder.stop();
  recording = false;

  clearInterval(timerInterval);
  time = 0;
  timer.textContent = "00:00";

  recordBtn.disabled = false;
  stopBtn.disabled = true;

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(audioBlob);

    audioPreview.innerHTML = `<audio controls src="${audioUrl}"></audio>`;
  };
};

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}
