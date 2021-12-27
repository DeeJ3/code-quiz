var quiz = [
    {
        question: 'What does the "T" stand for in HTML?',
        choices: ['tag', 'text', 'type'],
        correctAnswer: 'text'
    },
    {
        question: 'Which is not a CSS position?',
        choices: ['stationary', 'relative', 'static'],
        correctAnswer: 'stationary'
    },
    {
        question: 'Which is the hex triplet for red?',
        choices: ['46 82 B4', '2E 8B 57', 'FF 00 00'],
        correctAnswer: 'FF 00 00'
    }
]


var startBtn = document.getElementById('start-btn')
var question = document.getElementById('question-container')
var options = document.getElementById('options-container')
var timeContainer = document.getElementById('timer')

var quizIndex = 0
var score = 0
var timer = 60


startBtn.addEventListener('click', function () {
    startBtn.setAttribute('class', 'hidden')
    displayQuestion()
    startTimer()
})

function startTimer() {
    timeContainer.textContent = timer
    var time = setInterval(function () {
        timer--
        timeContainer.textContent = timer
        if (timer == 0 || quizIndex === quiz.length) {
            clearInterval(time)
            endQuiz()
        }
    }, 1000)
}

function displayQuestion() {

    if (quizIndex === quiz.length) {
        return
    }

    question.textContent = '';
    options.textContent = '';

    question.textContent = quiz[quizIndex].question

    for (var i = 0; i < quiz[quizIndex].choices.length; i++) {
        var optionBtn = document.createElement('button')
        optionBtn.textContent = quiz[quizIndex].choices[i]
        options.append(optionBtn)

        optionBtn.addEventListener('click', function (event) {
            if (event.target.textContent === quiz[quizIndex].correctAnswer) {
                console.log('correct')
                score += 20
                console.log(score);
            } else {
                console.log('incorrect');
                timer -= 10
                console.log(score);
            }
            quizIndex++
            displayQuestion()
        })
    }
}

function endQuiz() {
    question.textContent = '';
    options.textContent = '';
    console.log('Quiz is over, your score is: ', score);

    var input = document.createElement('input')
    input.setAttribute('placeholder', 'Enter Your Name')
    question.append(input)
    var btn = document.createElement('button')
    btn.textContent = 'Submit'
    question.append(btn)

    btn.addEventListener('click', function() {
        var storage = JSON.parse(localStorage.getItem('quizHistory'))
        if( storage === null) {
            storage=[]
        }
        var user = {
            name: input.value,
            currentScore: score
        }
        storage.push(user)
        localStorage.setItem('quizHistory', JSON.stringify(storage))
        window.location.href = 'highscore.html'
    })
}