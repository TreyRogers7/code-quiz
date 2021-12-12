var questionsEl = document.querySelector(".questions")
var answersEl = document.querySelector(".answers")
var answerBtnEl = document.querySelectorAll(".answerBtn")
console.log(answerBtnEl)
var questionsArray = [{
    question: "what you eat?",
    answers: ["meat", "veggies", "fruits", "dessert"],
    solution: "meat"
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