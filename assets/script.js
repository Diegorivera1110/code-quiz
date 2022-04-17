// global variables
var highScores = document.querySelector("#highscores");
var timerEl = document.querySelector("#timer");
var mainContent = document.querySelector(".main-content");
var startButton = document.querySelector("#start-btn");
var questionLine = document.querySelector(".question-line");
var questionArea = document.createElement("div");
var quizEvent = false;
var correctAnswers = 0;


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
var timeRemaining = questions * 15;


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


// question load up 
var beginQuestion = function() {
  if (questionsList.length  > 0) {
    var answerOptions = randomQuestion();
    createAnswers(answerOptions.correct, answerOptions.answers);
    var questionEl = document.querySelector(".question-line");
    document.getElementById(questionEl).textContent = answerOptions.question;
  }
}

var randomQuestion = function () {
  var randomNumber = Math.floor(Math.random() * questionsList.length);
  var questionAnswer = questionsList[randomNumber];
  questionsList.splice(randomNumber, 1);
  var randomAnswers = [];

  for (var i = 0; i < 4; i++) {
      var random = Math.floor(Math.random() * (4-i));
      randomAnswers[i] = questionAnswer.answers[random];
      questionAnswer.answers.splice(random, 1);
  }
  questionAnswer.answers = randomAnswers;

  return questionAnswer;
}


var questionAnswer = function (correctlyAnswered) {
  if (document.querySelector(".selected")) {
    var selectedEl = document.createElement("div");
    selectedEl.className = "selected";
    mainContent.appendChild(selectedEl);
  }
    if (correctlyAnswered) {
     document.querySelector(".selected").textContent = "That's right!";
      correctAnswers += 1;
    } 
    else {
      correctlyAnswered.querySelector(".selected").textContent = "Sorry that's incorrect.";
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


// populate questions
var createAnswers = function(answers, correct) {
  var answerPrompt = document.createElement("div");
  answerPrompt.className = "answer-section";
  for (var i = 0; i < 4; i++) {
    var answerButton = document.createElement("button");
    answerButton.className = "answers" + (i + 1) + "btn";
    answerButton.id = "#answers-btn";
    answerButton.textContent = (i + 1) + ". " + answers[i];
  
    if (correct === answers[i]) {
      answerButton.setAttribute("correct",  true);
    } 
    answerPrompt.appendChild(answerButton);
    questionArea.appendChild(answerPrompt);
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