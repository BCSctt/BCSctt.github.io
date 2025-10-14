// Answer key
const KEY = {
  q1: "batman",
  q2: "thor",
  q3: ["ironman", "thor", "captainamerica"],
  q4: ["batman", "wonderwoman", "superman"]
};

function checkAnswers() {
  let score = 0;

  // Loop through each question
  Object.keys(KEY).forEach(q => {
    const inputs = document.querySelectorAll(`input[name="${q}"]`);
    const correct = KEY[q];
    let selected;

    if (inputs[0].type === "radio") {
      const picked = [...inputs].find(i => i.checked);
      selected = picked ? picked.value : null;
    } else {
      selected = [...inputs].filter(i => i.checked).map(i => i.value);
    }

    // Check if correct
    let isCorrect = false;
    if (Array.isArray(correct)) {
      isCorrect = selected.length === correct.length &&
                  correct.every(val => selected.includes(val));
    } else {
      isCorrect = selected === correct;
    }

    // Show feedback
    const fb = document.getElementById(`fb-${q}`);
    fb.className = "feedback " + (isCorrect ? "correct" : "incorrect");
    fb.textContent = isCorrect ? "Correct" : "Incorrect";

    if (isCorrect) score++;
  });

  // Show total score
  document.getElementById("results").textContent = `Score: ${score} / ${Object.keys(KEY).length}`;
}

document.getElementById("check-btn").addEventListener("click", checkAnswers);
