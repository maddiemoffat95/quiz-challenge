var questions = [
    {
        text: "Which of the following is correct about JavaScript?",
        choices: [
            "JavaScript is a lightweight, interpreted programming language.",
            "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
            "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
            "All of the above."
        ],
        answer: "All of the above."
    },

    {
        text: "Which of the following is the correct syntax to redirect a url using JavaScript?",
        choices: [
            "document.location='http://www.newlocation.com';",
            "browser.location='http://www.newlocation.com';",
            "navigator.location='http://www.newlocation.com';",
            "window.location='http://www.newlocation.com';"
        ],
        answer: "window.location='http://www.newlocation.com';"
    },

    {
        text: "Which built-in method combines the text of two strings and returns a new string?",
        choices: [
            "append()",
            "concat()",
            "attach()",
            "None of the above."
        ],
        answer: "concat()"
    },

    {
        text: "Which of the following function of Number object forces a number to display in exponential notation?",
        choices: [
            "toExponential()",
            "toFixed()",
            "toPrecision()",
            "toLocaleString()"
        ],
        answer: "toExponential()"
    },

    {
        text: "Which of the following function of String object returns the character at the specified index?",
        choices: [
            "charAt()",
            "charCodeAt()",
            "concat()",
            "indexOf()"
        ],
        answer: "charAt()"
    }
]

let start = document.getElementById("start-button");
let startOver = document.getElementById("start-over");
let timeLeft = 75;
let timer = document.getElementById("timer");
let runningQ = 0;
let curQ = questions[runningQ];
let questionDiv = document.getElementById("question-div");
let lastQ = questions[questions.length - 1];
let timerId;
let initials;
let submit = document.getElementById("submit-button");


function displayQuestion(curQ) {
    document.getElementById("question-div").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("header").style.display = "none";
    questionDiv.innerHTML = "<p>" + curQ.text + "</p>";
    curQ.choices.forEach(choice => {
        var button = document.createElement("button");
        button.textContent = choice
        questionDiv.append(button)
    });
    questionDiv.childNodes[1].addEventListener("click", function () { checkAnswer(questionDiv.childNodes[1].outerText) });
    questionDiv.childNodes[2].addEventListener("click", function () { checkAnswer(questionDiv.childNodes[2].outerText) });
    questionDiv.childNodes[3].addEventListener("click", function () { checkAnswer(questionDiv.childNodes[3].outerText) });
    questionDiv.childNodes[4].addEventListener("click", function () { checkAnswer(questionDiv.childNodes[4].outerText) });

};

function checkAnswer(answer) {

    if (answer == curQ.answer) {
        document.getElementById("answer-div").style.display = "none";
        if (answer == lastQ.answer) {
            endQuiz();
        }
        else {
            runningQ = runningQ + 1;
            curQ = questions[runningQ];
            displayQuestion(curQ);
        }
    }
    else {
        document.getElementById("answer-div").style.display = "block";
    }
};

function startTimer() {
    if (timeLeft == 75) {
        timerId = setInterval(startTimer, 1000);
    }

    if (timeLeft == 0) {
        clearTimeout(timerId);

    } else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function showScore() {
    document.getElementById("timer").style.display = "none";
    document.getElementById("question-div").style.display = "none";
    document.getElementById("answer-div").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score-div").style.display = "block";
    document.getElementById("score-div").innerHTML = "<p>" + "Congratulations! Your Score is: " + timeLeft + "</p>";
    submit.addEventListener("click", showHighScore);
};

function showHighScore() {
    document.getElementById("score").style.display = "none";
    document.getElementById("high-score").style.display = "block";
    initials = document.getElementById("initial-box").value
    let userScore = {
        "user": initials,
        "score": timeLeft
    };

    localStorage.setItem("highScore", JSON.stringify(userScore));
    var retrievedData = localStorage.getItem("highScore");

    document.getElementById("high-score").innerHTML = "High Score" + "<p>" + retrievedData + "</p>"
    startOver.addEventListener("click", secondStart);
};

// I need to create a start over button and have it call a fucntion that starts everything over instead of the page reloading after showHighScore and also have the button terminate a while loop

function endQuiz() {
    document.getElementById("question-div").style.display = "none";
    document.getElementById("answer-div").style.display = "none";
    clearTimeout(timerId);
    showScore();
}

function startQuiz(e) {
    e.preventDefault();
    startTimer();
    displayQuestion(curQ);
};

function secondStart() {
    document.getElementById("header").style.display = "block";
    document.getElementById("start-button").style.display = "block";
    document.getElementById("question-div").style.display = "none";
    document.getElementById("answer-div").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("score-div").style.display = "none";
};

document.getElementById("question-div").style.display = "none";
document.getElementById("answer-div").style.display = "none";
document.getElementById("score").style.display = "none";
document.getElementById("score-div").style.display = "none";

start.addEventListener("click", startQuiz);
