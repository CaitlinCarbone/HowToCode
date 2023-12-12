function getResults() {
    // Get correct answer elements, count how many are checked. Display percentage correct.
    var a1 = document.getElementById("a1q1");
    var a2 = document.getElementById("a2q2");
    var a3 = document.getElementById("a4q3");
    var a4 = document.getElementById("a1q4");
    var a5 = document.getElementById("a3q5");

    var countCorr = 0;
    if(a1.checked) { countCorr++; }
    if(a2.checked) { countCorr++; }
    if(a3.checked) { countCorr++; }
    if(a4.checked) { countCorr++; }
    if(a5.checked) { countCorr++; }
    var result = (countCorr/5) * 100;
    
    var resultString = result + "%";

    document.getElementById("quizBody").style.visibility = "hidden";
    var scoreText = document.createElement("h4");

    if(countCorr == 5) {
        scoreText.textContent = "Congrats! You scored a " + resultString + "! Great work.";
    } else if(countCorr == 4) {
        scoreText.textContent = "You scored a " + resultString + "! You're super close to the top!";
    } else {
        scoreText.textContent = "You scored a " + resultString + "... You can do better!";
    }

    var postQuizDiv = document.getElementById("postQuizDiv");
    postQuizDiv.appendChild(scoreText);
    
    var tryAgain = document.createElement("input");
    tryAgain.type = "button";
    tryAgain.value = "Try Again?";
    tryAgain.id = "tryAgainButton";
    tryAgain.onclick = tryAgainPressed;
    postQuizDiv.appendChild(tryAgain);
    uncheck();
}

function tryAgainPressed() {
    uncheck();
    document.getElementById("quizBody").style.visibility = "visible";
    document.getElementById("postQuizDiv").innerHTML = "";
}

function uncheck() {
    var a1q1 = document.getElementById("a1q1").checked = false;
    var a2q1 = document.getElementById("a2q1").checked = false;
    var a3q1 = document.getElementById("a3q1").checked = false;
    var a4q1 = document.getElementById("a4q1").checked = false;

    var a1q2 = document.getElementById("a1q2").checked = false;
    var a2q2 = document.getElementById("a2q2").checked = false;
    var a3q2 = document.getElementById("a3q2").checked = false;
    var a4q2 = document.getElementById("a4q2").checked = false;

    var a1q3 = document.getElementById("a1q3").checked = false;
    var a2q3 = document.getElementById("a2q3").checked = false;
    var a3q3 = document.getElementById("a3q3").checked = false;
    var a4q3 = document.getElementById("a4q3").checked = false;

    var a1q4 = document.getElementById("a1q4").checked = false;
    var a2q4 = document.getElementById("a2q4").checked = false;
    var a3q4 = document.getElementById("a3q4").checked = false;
    var a4q4 = document.getElementById("a4q4").checked = false;

    var a1q5 = document.getElementById("a1q5").checked = false;
    var a2q5 = document.getElementById("a2q5").checked = false;
    var a3q5 = document.getElementById("a3q5").checked = false;
    var a4q5 = document.getElementById("a4q5").checked = false;


}