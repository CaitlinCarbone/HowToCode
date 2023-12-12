<div>
    <h3>Can you find the bug? </h3>
    <p>Here are a couple functions each with a single syntax error preventing them from working as intended. Try to find the line that contains the error! in this <a href="./quiz.html">short quiz</a>.</p>

    <div>
        <label for="userAnswer1">Question 1: Enter your answer</label>
        <input type="text" id="userAnswer1" placeholder="Type your answer">
        <button onclick="checkAnswer(1)">Submit</button>
        <p id="result1"></p>
    </div>

    <div>
        <label for="userAnswer2">Question 2: Enter your answer</label>
        <input type="text" id="userAnswer2" placeholder="Type your answer">
        <button onclick="checkAnswer(2)">Submit</button>
        <p id="result2"></p>
    </div>

    <div>
        <label for="userAnswer3">Question 3: Enter your answer</label>
        <input type="text" id="userAnswer3" placeholder="Type your answer">
        <button onclick="checkAnswer(3)">Submit</button>
        <p id="result3"></p>
    </div>
  
    <div>
        <label for="userAnswer4">Question 4: Enter your answer</label>
        <input type="text" id="userAnswer4" placeholder="Type your answer">
        <button onclick="checkAnswer(4)">Submit</button>
        <p id="result4"></p>
    </div>
    
    <div>
        <label for="userAnswer5">Question 5: Enter your answer</label>
        <input type="text" id="userAnswer5" placeholder="Type your answer">
        <button onclick="checkAnswer(5)">Submit</button>
        <p id="result5"></p>
    </div>

</div>

 var correctAnswers = [
    "def add(x, y)", 
    "def first(l):",
    "<div></div>", 
    "int multiply(int x, int y) { return x * y; }",
    'cout<<"Hello World!";',
];

function checkAnswer(questionNumber) {
    console.log("checkAnswer function called for question " + questionNumber);

    var userInputId = "userAnswer" + questionNumber;
    var userAnswer = document.getElementById(userInputId).value.trim().toLowerCase();

    var correctAnswer = correctAnswers[questionNumber - 1];

    console.log("User Answer: " + userAnswer);
    console.log("Correct Answer: " + correctAnswer);

    var resultId = "result" + questionNumber;
    var resultElement = document.getElementById(resultId);

    var inputElement = document.getElementById(userInputId);

    if (userAnswer === correctAnswer) {
        inputElement.style.backgroundColor = "green";
        resultElement.innerHTML = "Correct!";
    } else {
        inputElement.style.backgroundColor = "red";
        resultElement.innerHTML = "Incorrect. Try again!";
        fadeOut(inputElement);
    }
}

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(interval);
            element.style.display = "none";
            element.style.backgroundColor = ""; // Reset background color
        } else {
            element.style.opacity = opacity;
            opacity -= 0.1;
        }
    }, 100);
}
