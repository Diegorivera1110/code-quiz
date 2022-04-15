// global variables
var timeRemaining = 90;
var quizEvent = false;
var correctAnswers = 0;

var highScores = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var mainContent = document.querySelector(".main-content")
var startButton = document.querySelector("#start-btn");
var questionLine = document.querySelector(".question-line");
var questionArea = document.createElement("div");

// Questions list
var questionsList = [
  {
    question: "Which is NOT a method for defining a new variable?",
    answers: ["let", "var", "new", "const"],
    correct: "new"
  },
  {
    question: "Which one of these is a useful tool for debugging?",
    answers: ["terminal", "else/if", ".alerts", "console.log"],
    correct: "console.log"
  },
  {
    question: "Which one of these is the first index of an array?",
    answers: ["a", "1", "0", "All of the above"],
    correct: "0"
  },
  {
    question: "Which one of these HTML elements contains the link to the JavaScript file?",
    answers: ["<java>", "<link>", "<script>", "<input>"],
    correct: "<script>"
  },
  {
    question: "Which one of these combines two strings of text and returns a new string?",
    answers: ["concat()", "merge()", "combine()", "append()"],
    correct: "concat()"
  },
  {
    question: "Arrays in JavaScript can contain which of the following?",
    answers: ["Booleans", "Arrays", "Numbers/Strings", "All of the above"],
    coorect: "All of the above"
  },
];

var questions = questionsList.length;


// handles the action after starting quiz
var taskHandler = function(event) {
  var buttonEl = event.target;
  
  if (buttonEl.matches("#start-btn")) {
    quizEvent = true;
    quizStart();
  }  
  else (buttonEl.matches(".answer-btn")); {
    if (questionsList.length === 0) 
    quizEvent = false;
    if (buttonEl.getAttribute("correct")) {
      questionAnswer(true);
    } else {
      questionAnswer(false);
    } 
  }
};

// starts quiz
var quizStart = function() {

  var time = setInterval(function() {
    timerEl.textContent = "Time: " + timeRemaining;
    
    // if (timeRemaining === 0 || !quizEvent) {
    if (timeRemaining === 0 || quizEvent === 0) {
      clearInterval(time);
      endOfQuiz();
    }
    timeRemaining--;
  }, 1000);

  nextContent(["#start-btn", ".main-content"]);
  mainContent.appendChild(questionArea);

  beginQuestion();
}
// END quizSart

// transition from description to 
var nextContent = function(content) {
  for (var i = 0; i < content.length; i++) {
  document.querySelector(content[i]).remove();
  }
}

// populate questions
var createAnswers = function(answers, correct) {
  var answerPrompt = createElement("div");
  answerPrompt.className = "answer-section";
  for (var i = 0; i < 4; i++) {
    var answerButton = createElement("button");
    answerButton.className = "answers" + (i++);
    answerButton.id = "#answer-btn"
    answerButton.textContent = answers[i];
  }
}


// question load up 
var beginQuestion = function() {
  if (questions.length  > 0) {
    var answerOptions = questionAnswer();
    promptAnswers(answerOptions.correct, answerOptions.answers);
    var questionEl = querySelector(".question-line");
    questionEl.textContent = answerOptions.question;
  }
}

var questionAnswer = function(correctlyAnswered) {
  if (!document.querySelector(".selected")) {
    var selectedEl = document.createElement("div");
    selectedEl.className = "selected";
    mainContent.appendChild(selectedEl);
  }
    if (correctlyAnswered) {
     document.querySelector(".selected").textContent = "That's right!";
      correctAnswers += 1;
    } 
    else {
      document.querySelector(".selected").textContent = "Sorry that's incorrect.";
      if (timeRemaining > 15) {
        timeRemaining -= 10;
      } 
      else {
        timeRemaining = 0;
      }
    } 
      if (timeRemaining > 0) {
        document.querySelector(".answer-section").remove();
      beginQuestion();
    }
}

// function ending quiz
var endOfQuiz = function() {
  var clock = 0;
  mainContent.remove();
  if (questionsList.length === 0) {
    clock = (timeRemaining + correctAnswers);
      prompt("You havanswered all questions");
  } else {
    alert("Your time is up!");
  }
  highScores();
}


  mainContent.addEventListener("click", taskHandler);