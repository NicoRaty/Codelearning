const questionBox = document.getElementById("questionBox");
const answerBox = document.getElementById("answerBox");
const hintText = document.getElementById("hintText");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const progressCounter = document.getElementById("progressCounter");

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

editor.setSize("800px", "400px");


//List of all challenges with question and answer
const challenges = [
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

let curQuestion = 0;    //Index counter for challenges


function loadQuestion() 
{
    editor.setValue(challenges[curQuestion].question);
    //hintText.innerText = challenges[curQuestion].hint;
    progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;
}

//Event listeners for buttons

nextBtn.addEventListener("click", () => {
    const userAnswer = editor.getValue();
    const correctAnswer = challenges[curQuestion].answer;
    if (incorrect >= 3 && userAnswer !== correctAnswer)
    {
        hintText.innerText = challenges[curQuestion].hint;
    }
    if (userAnswer === correctAnswer)
    {
        progress++;
        progressCounter.textContent = `Progress: ${progress} / ${challenges.length}`;
        curQuestion = (curQuestion + 1) % challenges.length;
        loadQuestion();
    }
    else 
    {
        incorrect++;
        alert("Incorrect! Try again!");
    }
    hintText.innerText = "";
    incorrectCounter = 0;
    
});

loadQuestion();