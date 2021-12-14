var startBtnEl=document.querySelector('.startBtn')
var questionEl=document.querySelector('#question-container')

startBtnEl.addEventListener('click', beginGame)

<<<<<<< HEAD
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
=======
function beginGame(){
    startBtnEl.classList.add('.hide')
    questionEl.classList.remove('.hide')
>>>>>>> fad4b216d00b09675274299921871c8f47885905

    console.log(beginGame)
}

function setNextQuestion(){
    console.log(setNextQuestion)
}

function selectAnswer(){
    console.log(selectAnswer)
}

