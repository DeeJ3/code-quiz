var quiz = [
    {
        question: 'This is question 1',
        choices: ['answer 1 of 1', 'answer 2 of 1', 'answer 3 of 1'],
        correctAnswer: 'answer 1 of 1'
    },
    {
        question: 'This is question 2',
        choices: ['answer 1 of 2', 'answer 2 of 2', 'answer 3 of 2'],
        correctAnswer: 'answer 1 of 1'
    },
    {
        question: 'This is question 3',
        choices: ['answer 1 of 3', 'answer 2 of 3', 'answer 3 of 3'],
        correctAnswer: 'answer 3 of 3'
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