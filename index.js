var eightBall = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
]


var answerButton = document.querySelector(".answer-button");
var randomAnswer = document.querySelector(".random-answer");
var questionInput = document.querySelector(".question-input");
var question = document.querySelector(".question");

answerButton.addEventListener("click", getAnswer);

function randomizeEightBall() {
  console.log("hi");
  var random = eightBall[Math.floor(Math.random()*eightBall.length)];
  return random;
}

function copyUserQuestion() {
  // console.log("hello");
  // for (var i = 0; i < questionInput.length; i++) {
  question.innerText = questionInput.value;
  // }
}

function getAnswer() {
  randomAnswer.innerText = randomizeEightBall();
  copyUserQuestion();
}
