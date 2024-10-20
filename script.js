let score = 0; // Initial score
let answeredQuestions = 0; // Track answered questions

// Select an answer without showing feedback immediately
function selectAnswer(button, correctness) {
    const quizCard = button.parentElement;
    const allButtons = quizCard.querySelectorAll('.quiz-option');

    allButtons.forEach(btn => {
        btn.disabled = true; // Disable all options after selection
        btn.style.backgroundColor = btn === button ? '#4caf50' : '#f44336'; // Highlight selection
    });

    if (correctness === 'correct') {
        score++; // Increment score for correct answer
    }

    answeredQuestions++; // Increment answered questions
}

// Submit the quiz and display the final score
function submitQuiz() {
    const userName = document.getElementById('user-name').value;
    const scoreContainer = document.getElementById('score-container');
    const userInfoDisplay = document.getElementById('user-info-display');
    const finalScoreElement = document.getElementById('final-score');

    // Ensure all questions are answered before submission
    if (answeredQuestions < 10) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Ensure user name is provided
    if (!userName) {
        alert("Please enter your name before submitting.");
        return;
    }

    // Display user info and score
    userInfoDisplay.textContent = `Name: ${userName}`;
    finalScoreElement.textContent = `Final Score: ${score}/10`;

    // Show score container
    scoreContainer.classList.remove('hidden');
}

// Mark lesson as complete
function markLessonComplete(lessonNumber) {
    const lessonButton = document.querySelector(`#lesson${lessonNumber} .lesson-complete-btn`);
    if (lessonButton) {
        lessonButton.disabled = true;
        lessonButton.style.backgroundColor = '#4caf50';
        lessonButton.textContent = 'Completed ✔️';
    }
}
