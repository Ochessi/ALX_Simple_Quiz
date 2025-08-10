function checkAnswer() {
    // Define correct answer
    const correctAnswer = "4";

    // Get selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);