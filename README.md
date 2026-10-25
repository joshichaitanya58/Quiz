# KBC Quiz Game 🏆

A browser-based quiz game inspired by the familiar *Kaun Banega Crorepati (KBC)* format. Built with **HTML, CSS, and vanilla JavaScript**, it challenges players with general-knowledge questions, a countdown timer, lifelines, and a running score.

## ✨ Features

- **Multi-screen game flow** — intro, rules, welcome, gameplay, and game-over screens.
- **General-knowledge questions** — topics include India, science, technology, history, and more.
- **45-second countdown** for each question.
- **Score tracking** with the current question number and prize score.
- **50:50 lifeline** — removes two incorrect options.
- **Audience Poll lifeline** — displays poll percentages for the available answers.
- **Question skips** — skip up to five questions per game.
- **Sound controls** — toggle game audio on or off.
- **Instant feedback** — visual feedback for answers and game results.
- **Responsive interface** with a dark, gold-accented quiz-show design.
- **Hindi and English content** across the interface and question bank.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Game screens, questions, answer options, and modals |
| CSS3 | Responsive layout, animations, gradients, and visual effects |
| JavaScript (Vanilla) | Question flow, timer, scoring, lifelines, and game state |
| MP3 audio | Quiz sound effects |
| JPG/PNG assets | Logo, background, and lifeline illustrations |

No framework, package installation, or build step is required.

## 🚀 Getting Started

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/joshichaitanya58/Quiz.git
   ```

2. Open the project folder:

   ```bash
   cd Quiz
   ```

3. Open `index.html` in your browser.

For local development, you can also open the folder in Visual Studio Code and use the **Live Server** extension.

## 🎮 How to Play

1. Open the game and select **Click to Continue**.
2. Review the game rules and continue to the welcome screen.
3. Select **Start Game** to begin answering questions.
4. Choose one of the four options before the 45-second timer runs out.
5. Use the **50:50** and **Audience Poll** lifelines when needed. Each is available once per game.
6. Skip up to five questions if you get stuck.
7. Keep answering correctly to increase your score. An incorrect answer or timeout ends the game.

## 🛟 Lifelines & Game Rules

| Feature | How it works |
|---|---|
| 50:50 | Removes two incorrect answer choices |
| Audience Poll | Shows a percentage bar for each answer option |
| Skip | Moves to another question; limited to five uses |
| Timer | Gives 45 seconds to answer each question |
| Sound | Turns game audio on or off |

## 📁 Project Structure

```text
Quiz/
├── index.html          # Game screens and interface
├── style.css           # Styling, responsiveness, and animations
├── main.js             # Question bank and game logic
├── logo.png            # Game logo
├── mainbg.jpg          # Background image
├── 50-50.jpg           # 50:50 lifeline image
├── audiance_poll.jpg   # Audience Poll lifeline image
└── kbc-question.mp3    # Game audio
```

## 🌐 Live Demo

If GitHub Pages is enabled for this repository, play the game here:

**https://joshichaitanya58.github.io/Quiz/**

## 🔮 Possible Improvements

- Add difficulty levels and a larger, categorized question bank.
- Shuffle questions and answer options between games.
- Store high scores using browser local storage.
- Add keyboard navigation and accessibility improvements.
- Add sound and animation preferences.
- Add a leaderboard or multiplayer mode.

## 👨‍💻 Author

**Chaitanya Joshi**

- GitHub: [@joshichaitanya58](https://github.com/joshichaitanya58)
- Portfolio: [my-portfolio-delta-virid-82.vercel.app](https://my-portfolio-delta-virid-82.vercel.app/)
- LinkedIn: [Chaitanya Joshi](https://www.linkedin.com/in/chaitanya-joshi-644b39298/)

---

<p align="center">Built with HTML, CSS, and JavaScript.</p>

> This is an educational quiz project inspired by a quiz-show format. It is not an official KBC product.
