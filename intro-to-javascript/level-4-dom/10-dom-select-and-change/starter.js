// =============================================================
// Level 4 · Task 1 — The DOM: select & change
// =============================================================
// document.querySelector("css selector") → the FIRST matching element
// document.querySelectorAll("css selector") → ALL matching elements
//
// "#title"    → the element with id="title"
// ".subtitle" → an element with class="subtitle"
// "p"         → a <p> element


// TODO 1: select #title and set its textContent to your name
//         const title = document.querySelector("#title");
//         title.textContent = "...";
const title = document.querySelector("#title");
title.textContent = "Aisha";

// TODO 2: select .subtitle and set its text to "Learning JavaScript"
const subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Learning JavaScript";

// TODO 3: select #card and add the class "highlight"
const card = document.querySelector("#card");
card.classList.add("highlight");

// TODO 4: turn each skill into an <li> inside #skills
const skills = ["HTML", "CSS", "JavaScript"];
const list = document.querySelector("#skills");
for (const skill of skills) {
  const li = document.createElement("li");
  li.textContent = skill;
  list.append(li);
}

// TODO 5: number the notes: "1. Practise every day", "2. …", "3. …"

const notes = document.querySelectorAll(".note");
notes.forEach((note, index) => {
  note.textContent = `${index + 1}. ${note.textContent}`;
});