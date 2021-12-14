var questionsEl=document.querySelector(".questions")
var answersEl=document.querySelector(".answers")
var answerBtnEl=document.querySelectorAll(".answerBtn")
var startbtnEl=document.querySelector(".startBtn")
var timerEl=document.querySelector(".timer")
var h1El=document.querySelector(".h1")
var containerEl=document.querySelector("#container")
console.log(answerBtnEl)

startbtnEl.addEventListener('click', beginGame)

function beginGame() {
    console.log('started')
    startbtnEl.classList.add('hide')
    h1El.classList.add('hide')
    // answersEl.classList.remove('hide')
    // questionsEl.classList.remove('hide')
    containerEl.classList.remove('hide')
}

function countDown() {
    var timeLeft=59;

    var timerInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " seconds left.";
        timeLeft--;
        }
        else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + " second left.";
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timerInterval);
          displayMessage();
        }
      }, 1000);
      }

var questionsArray = [{
    question: "what you eat?",
    answers: ["meat", "veggies", "fruits", "dessert"],
    solution: "meat"
},{
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
},{
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
},{
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
},{
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
},{
    question: "where do you work",
    answers: ["golf course", "sotware engineer", "server", "water boy"],
    solution: "golf course"
}];
var qCounter = 0

function displayQuestion() {
    var questionObj=questionsArray[qCounter];
    questionsEl.textContent=questionObj.question;
    for (var i=0; i<answerBtnEl.length; i++) {
        answerBtnEl[i].textContent=questionObj.answers[i]
    }
}

displayQuestion();