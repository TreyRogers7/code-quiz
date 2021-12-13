var questionsEl=document.querySelector(".questions")
var answersEl=document.querySelector(".answers")
var answerBtnEl=document.querySelectorAll(".answerBtn")
var startbtnEl=document.querySelector(".startBtn")
var timerEl=document.querySelector(".time")
var h1El=document.querySelector(".h1")
var containerEl=document.querySelector("#container")
var highscoresEl=document.querySelector(".highscores")
console.log(answerBtnEl)

// var shuffleQuestions, currentQuestionIndex

startbtnEl.addEventListener('click', beginGame)

function beginGame() {
    console.log('started')
    startbtnEl.classList.add('hide')
    h1El.classList.add('hide')
    answersEl.classList.remove('hide')
    questionsEl.classList.remove('hide')
    // displayQuestion()
    // provideNextQuestion()
    console.log(beginGame)
}

var secondsLeft=60;

function setTime() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " game over in ";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          endGame();
        }
      }, 1000);
    }

// function displayMessage() {
//     var timecount=0;

//     var messageinterval=setInterval(function() {
//         if (timer[timecount] === undefined) {
//             clearInterval(msgInterval);
//           } else {
//             timerEl.textContent = time[timecount];
//             wordCount++;
//           }
//         }, 1000);
//     }


// }    

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

// function provideNextQuestion() {
//     displayQuestion(shuffleQuestions[currentQuestionIndex])
// }

// function displayQuestion(questionsArray) {
    // questionsEl.innerText=questionsArray.questionsArray
// }

{
    var questionObj=questionsArray[qCounter];
    questionsEl.textContent=questionObj.question;
    for (var i=0; i<answerBtnEl.length; i++) {
        answerBtnEl[i].textContent=questionObj.answers[i]
    }
}
// console.log(provideNextQuestion)

// provideNextQuestion();

function endGame() {
    highscoresEl.classList.remove('hide')
    console.log(endGame)
}