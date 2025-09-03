document.addEventListener('DOMContentLoaded', () => {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const answerEl = document.getElementById('answer');
  const nextBtn = document.getElementById('nextBtn');
  const progressEl = document.getElementById('progress');
  const quizEl = document.getElementById('quiz');
  const resultEl = document.getElementById('result');
  const scoreEl = document.getElementById('score');
  const restartBtn = document.getElementById('restartBtn');

  let questions = [];
  let current = 0;
  let correct = 0;

  function generateQuestions() {
    questions = [];
    for (let i = 0; i < 10; i++) {
      const a = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      questions.push({a, b, answer: a + b});
    }
  }

  function showQuestion() {
    const q = questions[current];
    num1El.textContent = q.a;
    num2El.textContent = q.b;
    answerEl.value = '';
    answerEl.focus();
    progressEl.textContent = `Question ${current + 1} of 10`;
  }

  function showResult() {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreEl.textContent = `You got ${correct} out of 10 correct!`;
  }

  nextBtn.onclick = function() {
    const userAns = parseInt(answerEl.value, 10);
    if (!isNaN(userAns) && userAns === questions[current].answer) {
      correct++;
    }
    current++;
    if (current < 10) {
      showQuestion();
    } else {
      showResult();
    }
  };

  restartBtn.onclick = function() {
    current = 0;
    correct = 0;
    generateQuestions();
    showQuestion();
    quizEl.classList.remove('hidden');
    resultEl.classList.add('hidden');
  };

  // Initialize
  generateQuestions();
  showQuestion();
});