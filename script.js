var textarea = document.getElementById("questionBox");

var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: "javascript",
    theme: "shadowfox",
    indentUnit: 2,
    tabSize: 2,
    matchBrackets: true
});

editor.setSize("800px", "400px");


//List of all challenges with question and answer
const challenges = [
{
    question: "console.___('Hello World!')",
    answer: "log",
    hint: "You are logging a phrase into the console"
},
{
    question: "for (let i = 0; i ____ 3; i++) { console.log(i); }",
    answer: "<",
    hint: "The loop should continue until the iterator reaches the value 3"
}
];

let curQuestion = 0;    //Index counter for challenges

const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");
const hintText = document.getElementById("hintText");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const progressCounter = document.getElementById("progressCounter");

function loadQuestion() 
{
    questionBox.value = challenges[curQuestion].question;
    answerBox.value = "";
    hintText.value = challenges[curQuestion].hint;
}

//Event listeners for buttons
checkBtn.addEventListener("click", () => {
    const userAnswer = answerBox.value.trim();
    const correctAnswer = challenges[curQuestion].answer;
    if (userAnswer === correctAnswer)
    {
        alert("Correct!");
        //progressCounter.textContent = `Progress: ${curQuestion + 1} / ${challenges.length}`;

    }
    else 
    {
        alert("Incorrect! Try again!");
    }
});
nextBtn.addEventListener("click", () => {
    curQuestion = (curQuestion + 1) % challenges.length;
    loadQuestion();
});

loadQuestion();