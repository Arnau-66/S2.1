# SPRINT 2.1 - Developer Branch

This branch (`developer`) is the main working branch for Sprint 2.1 of the JavaScript module.

It contains the full structure of the project, including all individual exercises, centralized styles, and navigation logic.

## 🔧 Structure
S2/
├── index.html ← Main menu linking to all exercises
├── style.css ← Shared stylesheet
├── exercicis/ ← Individual HTML pages for each exercise
│ ├── exercici1.1.html
│ ├── exercici1.2.html
│ └── …
└── js/ ← JavaScript files with the solutions
├── main1.1.js
├── main1.2.js
└── …

## 📌 How it works

- The project starts from `index.html`, which links to all exercise pages.
- Each `exercici1.X.html` is linked to a matching `main1.X.js` file containing the logic and `console.log()` outputs.
- Exercises are displayed using styled sections (`.exercise-box`) with navigation buttons at the bottom.
  - The last button ("Tornar a l'inici") is highlighted in the same red tone as the exercise headings.

## 🧪 Testing

To test any exercise:
1. Open the corresponding HTML file in a browser.
2. Open the developer console with `F12` (Windows) or `Cmd + Option + J` (Mac).
3. Check the printed results in the console.

---

This branch is used to actively build, test, and refine all JavaScript exercises before merging into `main`.
