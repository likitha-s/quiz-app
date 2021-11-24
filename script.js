const quizData = [
    {
        question: "	OS computer abbreviation usually means ?",
        a: 'Order of Significance',
        b:	'Open Software',
        c:	'Operating System',
        d:	'Optical Sensor',

        correct: 'c'
    },
    {
        question: "The purpose of choke in tube light is ?",
        a: 'To decrease the current',
        b:	'To increase the current',
        c:	'To decrease the voltage momentarily',
        d:	'To increase the voltage momentarily',

        correct: 'd'
    },
    {
        question: "	Who developed Yahoo ?",
        a: 'Dennis Ritchie & Ken Thompson',
        b:	'David Filo & Jerry Yang',
        c:	'OVint Cerf & Robert Kahn',
        d:	'Steve Case & Jeff Bezos',

        correct: 'b'
    },
    {
        question: "	What does VVVF stand for ?",
        a: 'Variant Voltage Vile Frequency',
        b:	'Variable Velocity Variable Fun',
        c:	'Very Very Vicious Frequency',
        d:	'Variable Voltage Variable Frequency',

        correct: 'd'
    },
];

const quizcontainer = document.querySelector("#quiz");
const answerEl = document.querySelectorAll(".answer");
const question = document.querySelector("#question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});