<script>
    function checkAnswer() {
        // Get the user's answer
        var userAnswer = document.getElementById("userAnswer").value.toLowerCase(); // Convert to lowercase for case-insensitive comparison

        // Define the correct answer
        var correctAnswer = "your_actual_answer"; // Replace with the actual answer

        // Check if the user's answer is correct
        if (userAnswer === correctAnswer) {
            document.getElementById("result").innerHTML = "Correct!";
        } else {
            document.getElementById("result").innerHTML = "Incorrect. Try again!";
        }
    }
</script>
