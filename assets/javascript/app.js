var count = 0;
var questions = [
  {
    number: 1,
    question: "What was the original name of the show?",
    choises: [
      { choiseNumber: 1, choice: "Insomnia Cafe" },
      { choiseNumber: 2, choice: "Central Perk" }
    ],
    answer: "1"
  },
  {
    number: 2,
    question: "Where did Ross and Rachel get married on a whim?",
    choises: [
      { choiseNumber: 1, choice: "Atlantic City" },
      { choiseNumber: 2, choice: "Las Vegas" }
    ],
    answer: "2"
  },
  {
    number: 3,
    question: "What was Monica’s apartment number?",
    choises: [
      { choiseNumber: 1, choice: "20" },
      { choiseNumber: 2, choice: "15" }
    ],
    answer: "1"
  },
  {
    number: 4,
    question: "Which Sprouse twin played Ross’ son, Ben Geller?",
    choises: [
      { choiseNumber: 1, choice: "Cole Sprouse" },
      { choiseNumber: 2, choice: "Dylan Sprouse" }
    ],
    answer: "1"
  },
  {
    number: 5,
    question: "Which season was the only one without a Thanksgiving episode?",
    choises: [
      { choiseNumber: 1, choice: "Season 2" },
      { choiseNumber: 2, choice: "Season 6" }
    ],
    answer: "1"
  },
  {
    number: 6,
    question: "Which pairing never kissed on the show?",
    choises: [
      { choiseNumber: 1, choice: "Monica and Phoebe" },
      { choiseNumber: 2, choice: "Chandler and Rachel" }
    ],
    answer: "1"
  },
  {
    number: 7,
    question: "What is the name of Joey’s stuffed penguin?",
    choises: [
      { choiseNumber: 1, choice: "Alisha May" },
      { choiseNumber: 2, choice: "Hugsy" }
    ],
    answer: "2"
  },
  {
    number: 8,
    question: "What role did Janice originally audition for on “Friends”?",
    choises: [
      { choiseNumber: 1, choice: "Monica Geller" },
      { choiseNumber: 2, choice: "Rachel Green" }
    ],
    answer: "1"
  },
  {
    number: 9,
    question: "What is Chandler’s middle name?",
    choises: [
      { choiseNumber: 1, choice: "Marcel" },
      { choiseNumber: 2, choice: "Muriel" }
    ],
    answer: "2"
  },
  {
    number: 10,
    question: "Who was Rachel supposed to marry in the pilot episode?",
    choises: [
      { choiseNumber: 1, choice: "Barry" },
      { choiseNumber: 2, choice: "Paolo" }
    ],
    answer: "1"
  },
  {
    number: 11,
    question: "What did Joey name his barcalounger?",
    choises: [
      { choiseNumber: 1, choice: "Rosa" },
      { choiseNumber: 2, choice: "Rosita" }
    ],
    answer: "2"
  },
  {
    number: 12,
    question:
      "Which one of Joey’s sister did Chandler fool around with at Joey’s birthday party?",
    choises: [
      { choiseNumber: 1, choice: "Mary Angela" },
      { choiseNumber: 2, choice: "Mary Therese" }
    ],
    answer: "1"
  },
  {
    number: 13,
    question: "What was Chandler’s job in the early seasons of the show?",
    choises: [
      { choiseNumber: 1, choice: "Data analyst" },
      { choiseNumber: 2, choice: "IT procurements manager" }
    ],
    answer: "2"
  },
  {
    number: 14,
    question: "Who pees on Monica’s leg when she gets stung by a jellyfish?",
    choises: [
      { choiseNumber: 1, choice: "Chandler" },
      { choiseNumber: 2, choice: "Joey" }
    ],
    answer: "1"
  },
  {
    number: 15,
    question: "What caused the fire in Phoebe and Rachel’s apartment?",
    choises: [
      { choiseNumber: 1, choice: "Rachel’s hair straightener" },
      { choiseNumber: 2, choice: "Phoebe’s candles" }
    ],
    answer: "1"
  }
];
var time = 90;
var interValid;

function countDown() {
  interValid = setInterval(decrement, 1000);
}
function stopCountDown() {
  clearInterval(interValid);
  showResult();
}
function decrement() {
  time--;
  $("#time-remaining").html(`<h2>Time Remaining<br><br> ${time} Seconds</h2>`);
  if (time === 0) {
    answerCheck();
    stopCountDown();
    $("#submit").empty();
    $("#trivia-questions").empty();
    $("#time-remaining").empty();
    appendRestart();
  }
}
function showResult() {
  var createDiv = $("<div>");
  createDiv.addClass("result-div");
  var p = $("<p>");
  var createImg = $("<img>");
  createImg.addClass("result-img");
  if (count <= 5) {
    console.log("3rd");
    p.html(
      `You got the ${count} right! <br>You've probably binge a few episodes on Netflix,<br> but you're not totally ~obsessed~ with the show.<br> Study up!`
    );
    createImg.attr(
      "src",
      "https://media.giphy.com/media/eJS4WUQ7MkNKx3qxPN/giphy.gif"
    );
  } else if (count <= 10) {
    console.log("2nd");
    p.html(
      `You got the ${count} right! <br>You're a casual Friends fan, but not quite an expert yet.<br> Don't worry — just cuddle up on your couch and catch up on a few seasons.`
    );
    createImg.attr(
      "src",
      "https://media.giphy.com/media/lI6nHr5hWXlu0/giphy.gif"
    );
  } else {
    console.log("1st");
    p.html(
      `You got the ${count} right! <br>Congratulations, you're a Friends trivia pro!<br> You're basically a part of the gang at this point.`
    );
    createImg.attr(
      "src",
      "https://media.giphy.com/media/lfmYxOkGpNtEk/giphy.gif"
    );
  }
  createDiv.append(createImg);
  createDiv.append(p);
  $("#result").append(createDiv);
}
function answerCheck() {
  questions.forEach(function(question) {
    var allInput = $(`input[name="${question.number}"]`);
    console.log(allInput);
    var userChoice = $(`input[name="${question.number}"]`).filter(function() {
      return this.checked;
    });
    var userChoiceValue = userChoice.val();
    console.log(userChoiceValue);
    if (userChoiceValue === question.answer) {
      count++;
      console.log(count);
    }
  });
}
function appendQuestions() {
  questions.forEach(function(question) {
    var createQuestion = $("<div>").html(
      `<h3>Question ${question.number}</h3>
      <h2>${question.question}</h2>
      <input type="radio" name="${question.number}" value="${question.choises[0].choiseNumber}">${question.choises[0].choice}
      <input type="radio" name="${question.number}" value="${question.choises[1].choiseNumber}">${question.choises[1].choice}
      <br><br>`
    );
    $("#trivia-questions").append(createQuestion);
  });
}
function appendSubmit() {
  var submitButton = $("<button>");
  submitButton.addClass("submit-result");
  submitButton.text("Submit");
  $("#submit").append(submitButton);
}
function appendRestart() {
  var restartButton = $("<button>");
  restartButton.addClass("submit-result");
  restartButton.text("Restart");
  $("#restart").append(restartButton);
}
function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
$("#start").click(function() {
  countDown();
  removeElement("start");
  appendQuestions();
  appendSubmit();
});
$("#submit").click(function() {
  answerCheck();
  stopCountDown();
  $("#submit").empty();
  $("#trivia-questions").empty();
  $("#time-remaining").empty();
  appendRestart();
});
$("#restart").click(function() {
  $(".result-div").empty();
  $("#restart").empty();
  countDown();
  appendQuestions();
  appendSubmit();
});
