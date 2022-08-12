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
