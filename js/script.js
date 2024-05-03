// Массив с вопросами, вариантами ответов и правильными ответами

let quizContainer = document.querySelector('.quiz-container');
let loginContainer = document.querySelector('.login-container');
let resultsContainer = document.querySelector('.results-container');
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
    },
    {
        question: "Какой знак исползуется для получения остатка от деления?",
        options: ["/", "//", "%", "**"],
        correctAnswer: "%"
    },
    {
        question: "Как вывести что-либо в консоль?",
        options: ["std::cout <<", "print()", "Console.WriteLine()", "console.log()"],
        correctAnswer: "console.log()"
    },
    {
        question: "Какой тег используется для вставки иображений на страницу?",
        options: ["<img>", "<image>", "<picture></picture>", "photo"],
        correctAnswer: "<img>"
    }
]

let currentQuestion = 0; //Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответа

function displayLogin() {
    loginContainer.style.display = "flex";
    quizContainer.style.display = "none";
    resultsContainer.style.display = "none";


    let begin = document.querySelector(".begin");

    begin.addEventListener('click', (e) => {
        displayQuestion();
    })

}

let input = document.querySelector(".input__name");

function displayQuestion() {
    loginContainer.style.display = "none";
    quizContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    let result = document.getElementById("result");
    //result.textContent = correctAnswers
    let questionElement = document.querySelector(".question"); // получить блок для размещения вопроса
    // размещаем вопрос на странице
    questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
    let optionsElement = document.querySelector(".options"); // Получить блок для размещения кнопки
    optionsElement.innerHTML = ""; // Очищаем содержимое блока optionsElement

    // Получить массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу

    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = option;
        optionsElement.append(button);
    });


    let wrongAnswers = document.querySelector(".result__wrong-answers");
    optionsElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentQuestion >= questions.length - 1) {
            displayResults();
        }
        let targetOption = e.target;
        console.log("to: ", targetOption);
        console.log(currentQuestion);
        console.log(correctAnswers);
        console.log("chosen:", targetOption.textContent);
        console.log("correct answer:", questions[currentQuestion].correctAnswer);
        if (targetOption.textContent == questions[currentQuestion].correctAnswer) { // THE MISTAKE WAS HERE, BECAUSE OF = INSTEAD OF == !
            correctAnswers += 1;
            console.log("correct answers upd:", correctAnswers);

        } else {
            let wronganswer = document.createElement("p");
            wronganswer.classList.add("wronganswer");
            //wronganswer.textContent = questions[currentQuestion].correctAnswer;
            console.log("index of wrong question:", questions.indexOf(questions[currentQuestion]) + 1);
            wronganswer.textContent = (questions.indexOf(questions[currentQuestion]) + 1).toString() + ". " + questions[currentQuestion].question;
            wrongAnswers.append(wronganswer);
            console.log("wrong answers:", wrongAnswers);
            console.log("wrong answer:", wronganswer);

        }
        console.log(targetOption.textContent);
        console.log(questions[currentQuestion].correctAnswer);

        currentQuestion += 1; // получить блок для размещения вопроса
        console.log(questions[currentQuestion].question)
        questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
        optionsElement.innerHTML = "";


        let optionsArray = questions[currentQuestion].options;

        // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу

        optionsArray.forEach((option) => {
            let button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = option;
            optionsElement.append(button);
            //result.textContent = `${correctAnswers}/${questions.length}`
        });
    })



    /*
    parent.addEventListener('click', (e) => {
        console.log(e);
        console.log('click');
        e.preventDefault();


        let targetBtn = e.target;

        console.log('button defined');

        if (targetBtn.getAttribute('class') == "key") {
            if (targetBtn.textContent == "Space") {
                input.textContent += " ";
            } else if (targetBtn.textContent == "Backspace") {
                console.log(input.textContent[input.textContent.length - 1]);
                input.textContent = input.textContent.replace(input.textContent[input.textContent.length - 1], '')
            } else {
                input.textContent += targetBtn.textContent;
        
            }
            console.log(targetBtn.textContent);
            console.log(input.textContent);

        }

    })
    */


    console.log(correctAnswers);


}


function displayResults() {
    let name = input.value;
    console.log("name: ", name);
    loginContainer.style.display = "none";
    quizContainer.style.display = "none";
    resultsContainer.style.display = "flex";
    console.log("correctAnswers", correctAnswers);
    console.log("questions length", questions.length);
    let percentage = Math.round(correctAnswers / questions.length * 100);
    console.log("fghfghfg");
    console.log("percentage:", percentage);
    let mark = 0
    if (percentage > 80) {
        mark = 5;
    } else if (percentage < 81 && percentage > 62) {
        mark = 4;
    } else if (percentage < 63 && percentage > 49) {
        mark = 3;
    } else {
        mark = 2;
    }
    let results__mark = document.querySelector(".results__mark");
    let results__percentage = document.querySelector(".results__percentage");
    results__mark.textContent = `${name}, ваша оценка ${mark}`;
    results__percentage.textContent = `Правильных ответов ${correctAnswers} из ${questions.length} (${percentage}%)`;







    /*
    
    
    5	91-100%
    5-	81-90 %
    4	71-80 %
    4-	63-70 %
    3	56-62 %
    3-	50-55 %
    2	25-49 %
    2-	0-24 %
    
    
    */




    /*

    
Иван, ваша оценка 3 
правильных ответов 3 из 6 (50%)
Вы ответили неверно на следующие вопросы:
Какой язык программирования вы изучаете?
Что такое CSS?

    */






}

displayLogin();
/*
displayQuestion();
*/




