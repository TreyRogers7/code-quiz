var startBtnEl=document.querySelector('.startBtn')
var questionEl=document.querySelector('#question-container')

startBtnEl.addEventListener('click', beginGame)

function beginGame(){
    startBtnEl.classList.add('.hide')
    questionEl.classList.remove('.hide')

    console.log(beginGame)
}

function setNextQuestion(){
    console.log(setNextQuestion)
}

function selectAnswer(){
    console.log(selectAnswer)
}

