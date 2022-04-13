var highScores = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var mainContent = document.querySelector(".main-content")
var startButton = document.querySelector("#start-btn");
var questionsList;


// handles the action after starting quiz
var buttonHandler = function(event) {
  var buttonEl = event.target;
  
  if (buttonEl.matches("#start-btn")) {
    start();
  } else if ()
};
  
  // the function actions after quiz has been started
  var start = function() {
    var timer = setInterval(function() {
      timerEl.textContent = "Timer: " + timeLeft;
    })
  }
  
  
  
  // Questions list
  var questionsList = [
    {
      question:;
      answer: ;
      
    }
  ]
