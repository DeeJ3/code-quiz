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


startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    displayQuestion()
})

function displayQuestion() {
    question.textContent = quiz[0].question

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var optionBtn = document.createElement('button')
        optionBtn.textContent = quiz[0].choices[i]
        options.append(optionBtn)

        optionBtn.addEventListener('click', function(event) {
            if(event.target.textContent === quiz[0].correctAnswer) {
                console.log('correct')
            } else {
                console.log('incorrect');
            }
        })
    }
}