var currentQuestion;
var timer = 9;
var interval;
var score = 0;

function startGame(){
  if (timer === 0) {
    timer = 9;
    score = 0;
  }
  interval = setInterval(function () {
    timer--;
    $('#countdown').text(timer);
    if (timer === 0) {
      clearInterval(interval);
      interval = undefined;
    }
  }, 1000);
}

function updateScore(amount) {
  score += amount;
  $('#score').text(score);
};

function addSecond(){
  timer++;
  $('#countdown').text(timer);
}

function createRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

function createQuestion() {
  var question = {};
  var num1 = createRandomNumber();
  var num2 = createRandomNumber();
  
  question.answer = num1 + num2;
  question.text = String(num1) + " + " + String(num2);
  
  currentQuestion = question;

  $('#question').text(currentQuestion.text);
}

function checkAnswer(userInput, answer) {
  if(userInput === answer){
    createQuestion();
    $('#user-input').val('');
    addSecond();
    updateScore(1);
  }
}

function setInputListener(){
  $('#user-input').on('keyup', function () {
    if (!interval) {
      startGame();
    }
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });
}


$(document).ready(function(){

  setInputListener();
  createQuestion();

});