const questions = [
    {
        question: "Скільки буде 2 + 2?",
        answers: ["3", "4", "5"],
        correct: 1
    },
    {
        question: "Який колір має небо?",
        answers: ["Зелений", "Синій", "Червоний"],
        correct: 1
    },
    {
        question: "Хто ходить?",
        answers: ["студенти на пари", "тцк на вулиці", "dog"],
        correct: 1
    },
    {
        question: "Скільки лапок у кішки?",
        answers: ["2", "4", "6"],
        correct: 0
    }
];

let currentQuestion = 0;

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = questions[currentQuestion].answers[i];
        options[i].style.backgroundColor = "#007bff";
        options[i].disabled = false;
    }
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    const options = document.getElementsByClassName("option");
    if (selected === correctAnswer) {
        options[selected].style.backgroundColor = "#28a745";
    } else {
        options[selected].style.backgroundColor = "#dc3545";
        options[correctAnswer].style.backgroundColor = "#28a745";
    }
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Тест завершено!");
    }
}

window.onload = displayQuestion;
