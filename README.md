# SPRINT 2.1 - BASIC JAVASCRIPT EXERCISES

This repository contains the basic JavaScript exercises for Sprint 2.1. It is organized into branches to keep the project clean and structured:

- **Main branch**: `main`  
- **Sub-branch**: `developer` (derived from `main`)  
- **Feature branch**: `features` (working branch used to build and test all exercises)  
- **Exercise branches**: from `exercici1.1` to `exercici1.7` (derived from `developer`)

Each `exercici1.X` branch includes the following structure:
- `index.html`: main menu in Catalan, acting as a central hub to access each exercise.
- `exercicis/exercici1.X.html`: individual HTML file for each exercise.
- `js/main1.X.js`: JavaScript file linked to its corresponding HTML to handle the logic of that specific exercise.
- `style.css`: shared stylesheet for all pages, ensuring visual consistency.

## 📂 Project Structure

S2/
├── index.html
├── style.css
├── exercicis/
│   ├── exercici1.1.html
│   ├── exercici1.2.html
│   └── …
└── js/
    ├── main1.1.js
    ├── main1.2.js
    └── …

Each exercise HTML file (`exercici1.X.html`) contains:

- A heading (`<h1>`) and a short description.
- A list of exercises, each in its own `<section class="exercise-box">`, styled with a distinctive colored border and title.
- A navigation block at the bottom with buttons:
  - **Inici** → returns to the main `index.html`
  - **Següent** / **Anterior** → to go forward or backward through exercises.
  - The final navigation button (like "Tornar a l'inici") is highlighted in a reddish color matching the exercise headings (`#c2185b`).

## 🚀 Exercise Flow

The user starts from `index.html`, which links to all exercises. Each exercise page includes instructions written in Catalan and a connected JS file (`main1.X.js`) that contains the logic and console output.

Exercises are designed to:
- Practice arrow functions, control structures, ternary operators, loops, etc.
- Run and test solutions using `console.log()`.
- Allow users to open the browser console and verify output directly.

## 🔎 How to check and debug exercises

1. Open any `exercici1.X.html` file in your browser.
2. Press `F12` (Windows) or `Cmd + Option + J` (Mac) to open the developer console.
3. View the results or errors printed via `console.log()`.

---

This structure allows each exercise to be self-contained and navigable while maintaining a consistent design and codebase for educational clarity.
