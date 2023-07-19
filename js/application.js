var currentQuestion;

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
  }
}

function setInputListener(){
  $('#user-input').on('keyup', function () {
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });
}


$(document).ready(function(){

  setInputListener();
  createQuestion();

});