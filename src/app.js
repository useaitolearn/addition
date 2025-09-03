const questionCount = 10;
let currentQuestion = 0;
let score = 0;

const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const answerInput = document.getElementById('answer');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    num1Element.textContent = num1;
    num2Element.textContent = num2;
    return num1 + num2;
}

let correctAnswer = generateQuestion();

nextButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    answerInput.value = '';

    if (currentQuestion < questionCount) {
        correctAnswer = generateQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    num1Element.style.display = 'none';
    num2Element.style.display = 'none';
    answerInput.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questionCount}`;
    resultElement.style.display = 'block';
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    num1Element.style.display = 'block';
    num2Element.style.display = 'block';
    answerInput.style.display = 'block';
    nextButton.style.display = 'block';
    resultElement.style.display = 'none';
    restartButton.style.display = 'none';
    correctAnswer = generateQuestion();
});

// Initialize the first question
correctAnswer = generateQuestion();