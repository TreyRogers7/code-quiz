var questionsEl=document.querySelector(".questions")
var answersEl=document.querySelector(".answers")
var answerBtnEl=document.querySelectorAll(".answerBtn")
var startbtnEl=document.querySelector(".startBtn")
var timerEl=document.querySelector(".timer")
var h1El=document.querySelector(".h1")
var containerEl=document.querySelector("#container")
var highscoresEl=document.querySelector(".highscores")
console.log(answerBtnEl)

var shuffleQuestions, currentQuestionIndex

startbtnEl.addEventListener('click', beginGame)

function beginGame() {
    console.log('started')
    startbtnEl.classList.add('hide')
    h1El.classList.add('hide')
    shuffleQuestions=questionsArray.sort(() => Math.random() -.5)
    currentQuestionIndex=0
    // answersEl.classList.remove('hide')
    // questionsEl.classList.remove('hide')
    provideNextQuestion()
    console.log(beginGame)
}

function countDown() {
    var timeLeft=60;

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
      console.log(countDown)
      }

var questionsArray = [{
    question: "what you eat?",
    answers: [
        {text:"meat", correct:true},
        {text:"veggies", correct:false},
        {text:"fruits", correct:false},
        {text:"dessert", correct:false}],
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
console.log(questionsArray)

var qCounter = 0

function provideNextQuestion() {
    displayQuestion(shuffleQuestions[currentQuestionIndex])
}

function displayQuestion(questionsArray) {
    questionsEl.innerText=questionsArray.questionsArray
}

// {
//     var questionObj=questionsArray[qCounter];
//     questionsEl.textContent=questionObj.question;
//     for (var i=0; i<answerBtnEl.length; i++) {
//         answerBtnEl[i].textContent=questionObj.answers[i]
//     }
// }
console.log(provideNextQuestion)

provideNextQuestion();

function endGame() {
    highscoresEl.classList.remove('hide')
    console.log(endGame)
}