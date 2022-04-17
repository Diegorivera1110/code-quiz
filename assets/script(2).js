var highScores = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var mainContent = document.querySelector(".main-content");
var startButton = document.querySelector("#start-btn");
var questionLine = document.querySelector(".question-line");
var showScore = document.getElementById("#score");
var questionArea = document.createElement("div");
var timeRemaining = 90;
var score = 0;
var currentQuestion = 0;
var quizStatus = false;

// Questions list
var questionsList = [
    {
      question: "Which is NOT a method for defining a new variable?",
      answers:{ a: "let", b: "var", c: "new", d: "const"},
      correct: "c"
    },
    {
      question: "Which one of these is a useful tool for debugging?",
      answers: { a: "terminal", b: "else/if", c: ".alerts", d: "console.log"},
      correct: "d"
    },
    {
      question: "Which one of these is the first index of an array?",
    answers: { a: "a", b: "1", c: "0", d: "All of the above"},
      correct: "c"
    },
    {
      question: "Which one of these HTML elements contains the link to the JavaScript file?",
      answers: { a: "<java>", b: "<link>", c: "<script>", d: "<input>"},
      correct: "c"
    },
    {
      question: "Which one of these combines two strings of text and returns a new string?",
      answers: { a: "concat()", b: "merge()", c: "combine()", d: "append()"},
      correct: "a"
    },
    {
      question: "Arrays in JavaScript can contain which of the following?",
      answers: { a: "Booleans", b: "Arrays", c: "Numbers/Strings", d: "All of the above"},
      coorect: "d"
    },
  ];
  
  var questionTotal = questionsList.length;


  // taskHandler function 
  var taskHandler = function(event) {
    var taskEl = event.target;
    
    if (taskEl.matches("#start-btn")) {
      quizStatus = true;
      startQuiz();
    }
   else (taskEl.matches("#start-btn")) {
    if (questionsList.length === 0)
    quizEvent = false;
  } if (taskEl.getAttribute("correct")) {

  }
  };

  // start quiz function 
  var startQuiz = function() {
      var timer
  }

var getAnswer = questionsList()
  console.log(getAnswer);

  startButton.addEventListener("click", showScore)