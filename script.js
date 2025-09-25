const questionBox = document.getElementById("questionBox");
const hintText = document.getElementById("hintText");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const progressCounter = document.getElementById("progressCounter");

class Challenge {
    constructor(question, answer, hint) {
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }
}

const chal1 = new Challenge("console.___('Hello World!')", "console.log('Hello World!')", "You are logging a phrase into the console");
const chal2 = new Challenge("for (let i = 0; i ____ 3; i++) { console.log(i); }", "for (let i = 0; i < 3; i++) { console.log(i); }", "The loop should continue until the iterator reaches the value 3");

const challenges = [chal1, chal2];

let incorrect = 0;
let progress = 0;


var editor = CodeMirror.fromTextArea(questionBox, {
    lineNumbers: true,
    mode: "javascript",
    theme: "shadowfox",
    indentUnit: 2,
    tabSize: 2,
    matchBrackets: true
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


//List of all challenges with question and answer
/*const challenges = [
{
    question: "console.___('Hello World!')",
    answer: "console.log('Hello World!')",
    hint: "You are logging a phrase into the console"
},
{
    question: "for (let i = 0; i ____ 3; i++) { console.log(i); }",
    answer: "for (let i = 0; i < 3; i++) { console.log(i); }",
    hint: "The loop should continue until the iterator reaches the value 3"
}
];
*/

let curQuestion = 0;    //Index counter for challenges


function loadQuestion() 
{
    editor.setValue(challenges[curQuestion].question);
    hintText.innerText = "";
    progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;
    incorrect = 0;
}

//Event listeners for buttons

nextBtn.addEventListener("click", () => {
    const userAnswer = editor.getValue();
    const correctAnswer = challenges[curQuestion].answer;
    if (incorrect >= 2 && userAnswer !== correctAnswer)
    {
        hintText.innerText = challenges[curQuestion].hint;
    }
    if (userAnswer === correctAnswer)
    {
        progress++;
        progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;

        const cmWrapper = editor.getWrapperElement();
        cmWrapper.classList.add("flash-green");
        
        const overlay = document.getElementById("correctOverlay");
        overlay.classList.add("show");
        setTimeout(() => {
        overlay.classList.remove("show");
        }, 600);

        setTimeout(() => {
        cmWrapper.classList.remove("flash-green");
        }, 600);

        curQuestion = (curQuestion + 1) % challenges.length;
        loadQuestion();
    }
    else 
    {
        incorrect++;         
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
document.querySelectorAll(".chalBtn").forEach((button) => {
  button.addEventListener("click", () => {
    curQuestion = parseInt(button.getAttribute("data-index"));
    loadQuestion();
  });
});
loadQuestion();