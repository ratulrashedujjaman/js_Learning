const questions = [
    {
        question: 'Which is largest animal in the world?',
        answer:[
            { text: 'Shark',correct: false},
            { text: 'Blue Whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is smallest country in the world?',
        answer:[
            { text: 'Vatican City',correct: true},
            { text: 'Bhutan', correct: false},
            { text: 'Nepal', correct: false},
            { text: 'Shrilanka', correct: false},
        ]
    },
    {
        question: 'Which is largest desert in the world?',
        answer:[
            { text: 'Kalahari',correct: false},
            { text: 'Gobi', correct: false},
            { text: 'Shahara', correct: true},
            { text: 'Antarctica', correct: false},
        ]
    },
    {
        question: 'Which is smallest continent in the world?',
        answer:[
            { text: 'Asia',correct: false},
            { text: 'Australia', correct: true},
            { text: 'Arctic', correct: false},
            { text: 'Africa', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
    
function selectAnswer(e){
const selectBtn = e.target;
const isCorrect = selectBtn.dataset.correct === 'true';
if(isCorrect){
    selectBtn.classList.add('correct');
}else{
    selectBtn.classList.add('incorrect');
}
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === 'true'){
        button.classList.add('correct');
    }
    button.disabled = true;
});
nextButton.style.display = 'block'

}

startQuiz();