// Массив с вопросами, вариантами ответов и правильными ответами

let questions = [
    {
        question: "Какой язык программиирования вы изучаете?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что такое HTML?",
        options: ["Язык разметки", "Язык программирования", "Базы данных", "Видеоредактор"],
        correctAnswer: "Язык разметки"
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "База данных", "Библиотека"],
        correctAnswer: "Каскадные таблицы стилей"
    }
]

let currentQuestion = 0 //Текущий вопрос
let correctAnswers = 0 // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответа

function displayQuestion() {
    let result = document.getElementById("result");
    result.textContent = correctAnswers
    let questionElement = document.getElementById("question"); // получить блок для размещения вопроса
    // размещаем вопрос на странице
    questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
    let optionsElement = document.getElementById("options"); // Получить блок для размещения кнопки
    optionsElement.innerHTML = ""; // Очищаем содержимое блока optionsElement

    // Получить массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу

    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.classList.add('btn');
        button.textContent = option;
    });

    optionsElement.addEventListener((e) => {
        let targetOption = e.target;
        if (targetOption.textContent = question[currentQuestion].correctAnswer) {
            correctAnswers += 1;
        }
        currentQuestion += 1;
    })





}

displayQuestion();




