/*
* Main script for the functionality of the Web Page
*/

//constants for page elements
const questionBox = document.getElementById("questionBox");
const instructionText = document.getElementById("instructionText");
const nextBtn = document.getElementById("nextBtn");
const progressCounter = document.getElementById("progressCounter");
const maincontent = document.getElementById("main-content");
const completedChallenges = new Set();  //Set to store completed challenges

//Ready array to ensure challenges are added properly
const challenges = [
    chal1, chal2, chal3, chal4, chal5,
    chal6, chal7, chal8, chal9, chal10,
    chal11, chal12, chal13, chal14, chal15,
    chal16, chal17, chal18, chal19, chal20,
    chal21, chal22, chal23, chal24, chal25];

let progress = 0;

//Embed CodeMirror code editor for challenges
var editor = CodeMirror.fromTextArea(questionBox, {
    lineNumbers: true,
    mode: "javascript",
    theme: "yonce",
    indentUnit: 2,
    tabSize: 2,
    matchBrackets: true,
});

//Overlay for the "Correct" message
const cmWrapper = editor.getWrapperElement();
cmWrapper.style.position = "relative"; 
const overlay = document.createElement("div");
overlay.id = "correctOverlay";
overlay.className = "correct-overlay";
overlay.innerText = "Correct";
cmWrapper.appendChild(overlay);
editor.setSize("800px", "400px");

// Overlay for the "Wrong" message
const wrongOverlay = document.createElement("div");
wrongOverlay.id = "wrongOverlay";
wrongOverlay.className = "wrong-overlay";
wrongOverlay.innerText = "Wrong";
cmWrapper.appendChild(wrongOverlay);

let curQuestion = 0;    //Index counter for challenges

function loadQuestion() 
{
    editor.setValue(challenges[curQuestion].question);
    instructionText.innerText = challenges[curQuestion].instruction;
    progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;

}

//Event listeners for buttons
nextBtn.addEventListener("click", () => {
    const userAnswer = editor.getValue();
    const correctAnswer = challenges[curQuestion].answer;

    //All possible outcomes from receiving correct answer
    if (userAnswer === correctAnswer) 
    {
        if (!completedChallenges.has(curQuestion)) {
            completedChallenges.add(curQuestion);
            progress++;
        }

        //Ensures the relevant sidebar button is unlocked after completion
        const chalButton = document.querySelector(`.chalBtn[data-index="${progress}"]`);
        if (chalButton) {
            chalButton.disabled = false;
            chalButton.classList.remove("locked");
        }
        
        //Incase all challenges are completed
        if (progress >= challenges.length) {
            const cmWrapper = editor.getWrapperElement();
            let congratsOverlay = document.getElementById("congratsOverlay");
            congratsOverlay = document.createElement("div");
            congratsOverlay.id = "congratsOverlay";
            congratsOverlay.className = "correct-overlay";
            congratsOverlay.innerText = "Congratulations! You have completed all challenges.";
            cmWrapper.appendChild(congratsOverlay);
            

            cmWrapper.classList.add("flash-green");
            congratsOverlay.classList.add("show");
            progress++;

            setTimeout(() => {
                congratsOverlay.classList.remove("show");
            }, 5000);

            setTimeout(() => {
                cmWrapper.classList.remove("flash-green");
            }, 5000);
        }

        else {
            progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;

            cmWrapper.classList.add("flash-green");
            const overlay = document.getElementById("correctOverlay");
            overlay.classList.add("show");

            setTimeout(() => {
                overlay.classList.remove("show");
                cmWrapper.classList.remove("flash-green");
            }, 600);

            curQuestion = (curQuestion + 1) % challenges.length;
            loadQuestion();
        }
        
    }

    //Incorrect answer handling
    else 
    {        
        const cmWrapper = editor.getWrapperElement();
        cmWrapper.classList.add("flash-red");
        setTimeout(() => {
        cmWrapper.classList.remove("flash-red");
        }, 600);
    
        const wrongOverlay = document.getElementById("wrongOverlay");
        wrongOverlay.classList.add("show");
        setTimeout(() => {
        wrongOverlay.classList.remove("show");
        }, 600);
    }
});

//Handle all sidebar buttons
document.querySelectorAll(".chalBtn").forEach((button) => {
  const index = parseInt(button.getAttribute("data-index"));

  if (index > progress) {
    button.disabled = true;
    button.classList.add("locked"); 
  }

  button.addEventListener("click", () => {

    if (index <= progress) {
      curQuestion = index;
      loadQuestion();
    }
  });
});

//Initializes first question on start
loadQuestion();