📘 My English Tutor – Web App

A complete English-learning dashboard and course system designed for learners who want to improve their speaking, writing, vocabulary, and communication skills.
This project includes authentication, a dashboard, reports, profile management, courses, and AI-assistant sections.

🚀 Features
🧑‍💻 User System

Signup & Login using LocalStorage

Profile dropdown menu

Editable profile page

Profile photo upload

Persistent user data storage

🏠 Dashboard

Learning statistics (streak, learning minutes)

Monthly activity tracker

Community benefits section

21-Day Speaking Challenge

AI-Powered Vocabulary Booster

AI Coach (Daily tasks & recommendations)

Quick action shortcuts:

Speaking Practice

Vocabulary Quiz

Writing Prompt

Shadow Listening

Grammar Lesson

📚 Courses Page

Search courses

Filter by difficulty level

Pop-up view for course details

Beginner / Intermediate / Advanced tags

Modern card layout

📈 Reports Page

Total learning time

Course progress tracking

Skill progress bars

Download report button

👤 Profile Page

Change profile picture

Edit personal info

Additional details (DOB, Gender, Country, Bio, Goals)

Learning stats overview

📁 Project Structure
My-English-Tutor/
│
├── dashboard.html
├── dashboard.css
├── login.html
├── signup.html
├── courses.html
├── courses.css
├── courses.js
├── reports.html
├── reports.css
├── profile.html
├── myprofile.css
│
├── img/
│   ├── profile.png
│   ├── community.png
│   ├── speaking.jpg
│   ├── business.jpg
│   ├── writing.jpg
│   ├── habit.jpg
│
└── README.md

🛠️ Tech Used

HTML5

CSS3

Vanilla JavaScript

LocalStorage (for login & saving user data)

▶️ How to Run the Project
1. Download or Clone the Repository
git clone https://github.com/yourusername/yourrepo.git

2. Open in VS Code

You can right-click → Open With Code

3. Run Using Live Server

Requirements: VS Code extension Live Server

Right-click on dashboard.html → Open with Live Server

🔐 Login System Notes

The website uses LocalStorage for basic login.

After signup, user data is saved as:

localStorage.setItem("userData", JSON.stringify(user));
localStorage.setItem("isLoggedIn", true);


Every page checks login status and auto-redirects to login.

📌 Future Improvements (Optional)

You can add later:

Firebase Authentication

Firestore Database

AI Speaking Test (Web Speech API)

Leaderboard for daily speaking challenge

Dark mode

🤝 Contributing

Pull requests are welcome!
If you'd like to add features, feel free to fork the repo.

📜 License

This project is free to use, modify, and upgrade. No restrictions.