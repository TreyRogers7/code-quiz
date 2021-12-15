var questionsEl = document.querySelector(".questions")
var answersEl = document.querySelector(".answers")
var answerBtnEl = document.querySelectorAll(".answerBtn")
var startbtnEl = document.querySelector(".startBtn")
var timerEl = document.querySelector(".timer")
var h1El = document.querySelector(".h1")
var containerEl = document.querySelector("#container")
var timerInterval
var timeLeft = 30
var highscoreEl = document.querySelector(".highscore")
var finalScoreEl = document.querySelector("#final-score")
console.log(answerBtnEl)

// startbtnEl.addEventListener('click', beginGame)

function beginGame() {
    console.log('started')
    startbtnEl.classList.add('hide')
    h1El.classList.add('hide')
    // answersEl.classList.remove('hide')
    // questionsEl.classList.remove('hide')
    containerEl.classList.remove('hide')
    displayQuestion()
    countDown()
}

// highscoreEl.textContent = 'test'

function endGame() {
    containerEl.classList.add('hide')
    highscoreEl.classList.remove('hide')
    // highscoreEl.textContent('test')
    clearInterval(timerInterval)
}

function countDown() {

    timerInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds left.";
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second left.";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            endGame();
        }
    }, 1000);
}

var questionsArray = [{
    question: "How would you target a class in CSS?",
    answers: [".", "#", "$", "*"],
    solution: "."
}, {
    question: "what is ONE KEY component to and HTML?",
    answers: ["var", "function", "Body", "::root"],
    solution: "Body"
}, {
    question: "How do you make your commits visible on a remote repository?",
    answers: ["git add -A", "git push", "git status", "git commit -m"],
    solution: "git push"
}, {
    question: "What is the correct way to create a Javascript page on VS Code?",
    answers: ["scipt.JAVA", "Java.script", "js.script", "script.js"],
    solution: "script.js"
}, {
    question: "Where would you find a description of someones code?",
    answers: ["VS Code", "README.md", "index.HTML", "script.js"],
    solution: "README.md"
}, {
    question: "Did i do a good job?",
    answers: ["Absolutely", "no", "ehhhhh", "Negative-GhostRider"],
    solution: "Absolutely"
}];
var qCounter = 0

function displayQuestion() {
    var questionObj = questionsArray[qCounter];
    questionsEl.textContent = questionObj.question;
    for (var i = 0; i < answerBtnEl.length; i++) {
        answerBtnEl[i].textContent = questionObj.answers[i]
    }
}

function solution(event) {
    var questionObj = questionsArray[qCounter];
    if (event.target.matches('button')) {
        var userAnswer = event.target.textContent
        if (userAnswer === questionObj.solution) {
            event.target.classList.add("correct");
            setTimeout(function (){
                event.target.classList.remove("correct")
            },1000)
    
        } else {
            event.target.classList.add("wrong");
            setTimeout(function (){
                timeLeft=timeLeft-5
                event.target.classList.remove("wrong")
            },1000)
    
        }
        if (qCounter<questionsArray.length-1){
        setTimeout(function (){
            qCounter++
            displayQuestion();
        },1000)}
        else {
            // endgame function goes here
           endGame()
        }
    }
}


answersEl.addEventListener('click', solution)
startbtnEl.addEventListener('click', beginGame)
