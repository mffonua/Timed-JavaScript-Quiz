var gameContainerEl = document.querySelector("#game-main");
var highScoresPEl = document.querySelector("#check-high-scores");
var yourScoreEl = document.querySelector("#your-score");
var timeEl = document.querySelector("#time-remaining");
var introEl = document.querySelector("#intro");
var godMode = document.querySelector("#god-mode");
var questionContainerEl = document.querySelector("#question-container");
var questionTxtEl = document.querySelector("#question");
var questionAnswerEl = document.querySelector("#answer-buttons");
var feedbackH2El = document.querySelector("#feedback");
var startBtnEl = document.querySelector("#start-btn");
var scoreContainerEl = document.querySelector("#game-scores");
var scoreBoardEl = document.querySelector("#score-board");
var topFiveEl = document.querySelector("#top-five");
var scoreListEl = document.querySelector("#score-list");
var scoreFormEl = document.querySelector("#score-form");
var scoreTextEl = document.querySelector("#score-text");
var congratsEl = document.querySelector("#congrats");
var saveBtnEl = document.querySelector("#save-score");
var playAgainBtnEl = document.querySelector("#play-again");
var getPlayerInit = document.querySelector("input[name='player-initials']");
var highScorers = [];
var scoreCount = 0;
var questionCount = 0;
var timeRemaining = 90;


var gameFinished; //Stops the timer if user finished before time is out. 
var godModeSelected; //Checks if God Mode is selected

function countdown() {
    timeInterval = setInterval(function () {
        if (gameFinished) {
            clearInterval(timeInterval);
        } else if (timeRemaining >= 0) {
            timeEl.textContent = "Seconds remaining: " + timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    startBtnEl.classList.add("hide");
    introEl.classList.add("hide");
    highScoresPEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    yourScoreEl.classList.remove("hide");
    timeEl.classList.remove("hide");
    countdown();
    nextQuestion();
}
function nextQuestion() {//serves up each question
    if (questionCount >= questions.length) {
        endQuiz();
        return false;
    }
    yourScoreEl.textContent = "Your score: " + scoreCount;

    feedbackH2El.classList.add("hide");

    questionTxtEl.innerHTML = questions[questionCount].question;
    for (i = 1; i <= 4; i++) {
        var optionBtn = questionAnswerEl.querySelector(".btn:nth-child(" + i + ")");
        var btnAnswer = questions[questionCount].answers[i - 1];

       
        optionBtn.disabled = false;

        optionBtn.textContent = btnAnswer.choice;

        if (optionBtn.classList.contains("true")) {
            optionBtn.classList.remove("true");
        }
       
        if (optionBtn.classList.contains("false")) {
            optionBtn.classList.remove("false");
        }
       
        if (optionBtn.classList.contains("green")) {
            optionBtn.classList.remove("green");
        }
        if (feedbackH2El.classList.contains("green")) {
            feedbackH2El.classList.remove("green");
        }
       
        if (optionBtn.classList.contains("red")) {
            optionBtn.classList.remove("red");
        }
        if (feedbackH2El.classList.contains("red")) {
            feedbackH2El.classList.remove("red");
        }

        optionBtn.classList.add(btnAnswer.correct);

        if (godModeSelected) {
            if (btnAnswer.correct) {
                optionBtn.classList.add("green");
            } else {
                optionBtn.classList.add("red");
            }
        }

        //Used .invisible instead of .hide to make box size more uniform
        if (btnAnswer.choice == "invisible") {
            optionBtn.classList.add(btnAnswer.choice);
        } else {//Removing invisible when it's no longer needed.
            if (optionBtn.classList.contains("invisible")) {
                optionBtn.classList.remove("invisible");
            }
        }
    }
    questionCount++;
}