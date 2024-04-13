let quest = document.getElementById("question");
let ansA = document.getElementById("A_bttn");
let ansB = document.getElementById("B_bttn");
let ansC = document.getElementById("C_bttn");
let ansD = document.getElementById("D_bttn");
let answrs = document.querySelectorAll('.answer');
let out = document.getElementById("output");
const submit_btn = document.getElementById("submit");
const next_btn = document.getElementById("next");

const questions = [
    {question: "What is the smallest country in the world?", choices: ["A. Portugal", "B. Vatican City", "C. Madagascar", "D. Luxembourg"], answer: "B"},
    {question: "What is the largest state in the USA, by area?", choices: ["A. Texas", "B. Alaska", "C. California", "D. Montana"], answer: "B"}
]

function getAnswer() {
    let ans = 1;

    answrs.forEach((x) => {
        if (x.checked) {
            ans = x.id;
        }
    });
    return ans;
}

let i = 1;

function gameStart() {
    quest.innerText = questions[i].question;
    ansA.innerText = questions[i].choices[0];
    ansB.innerText = questions[i].choices[1];
    ansC.innerText = questions[i].choices[2];
    ansD.innerText = questions[i].choices[3];

    submit_btn.addEventListener('click', () => {
        let ans = getAnswer();

        if (ans) {
            if (ans == questions[i].answer) {
                document.getElementById("output").innerHTML = "Correct";
            }
            else {
                document.getElementById("output").innerHTML = "Incorrect";
            }
        }
    })

    next_btn.addEventListener('click', () => {
        i = i - 1;
        gameStart();
    })
}

gameStart()