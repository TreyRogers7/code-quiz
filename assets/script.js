var questionsEl = document.querySelector(".questions")
var answersEl = document.querySelector(".answers")
var answerBtnEl = document.querySelectorAll(".answerBtn")
var startbtnEl = document.querySelector(".startBtn")
var timerEl = document.querySelector(".timer")
var h1El = document.querySelector(".h1")
var containerEl = document.querySelector("#container")
var timerInterval
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

function endGame() {
    containerEl.classList.add('hide')
    clearInterval(timerInterval)
}

function countDown() {
    var timeLeft = 60;

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
    question: "what you eat?",
    answers: ["meat", "veggies", "fruits", "dessert"],
    solution: "meat"
}, {
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
}, {
    question: "where do you sit",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
}, {
    question: "where do you lay",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
}, {
    question: "where do you stand",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
}, {
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
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
                event.target.classList.remove("wrong")
            },1000)
    
        }
        if (qCounter<questionsArray.length-1){
            console.log(qCounter)
            console.log(questionsArray.length)
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
