var quiz =[
     quesstions={
        text: "Which of the following is correct about JavaScript?",
        choices =[
        "JavaScript is a lightweight, interpreted programming language.",
        "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        "All of the above.",
        ],
        answer : "All of the above.",

        text: "Which of the following is the correct syntax to redirect a url using JavaScript?",
        choices = [
            "document.location='http://www.newlocation.com';",
            "browser.location='http://www.newlocation.com';",
            "navigator.location='http://www.newlocation.com';",
            "window.location='http://www.newlocation.com';",
        ],
        answer: "window.location='http://www.newlocation.com';",

        text: "Which built-in method combines the text of two strings and returns a new string?",
        choices =[
            "append()",
            "concat()",
            "attach()",
            "None of the above.",
        ],
        answer : "concat()",

        text : "Which of the following function of Number object forces a number to display in exponential notation?",
        choices = [
            "toExponential()",
            "toFixed()",
            "toPrecision()",
            "toLocaleString()",
        ],
        answer: "toExponential()",

        text: "Which of the following function of String object returns the character at the specified index?",
        choices =[
            "charAt()",
            "charCodeAt()",
            "concat()",
            "indexOf()",
        ],
        answer: "charAt()",
    }
]

let start= document.getElementById("start-button");





function displayQuestion (){
    questions.forEach(choices => {
    });
};

function checkAnswer (){

};

function startTimer (){

};

function endTimer (){

};

function showScore (){

};

function showHighScore (){

};

function startQuiz (){
    startTimer();
    displayQuestion();
};

start.addEventListener("click", startQuiz)
