const quizForm = document.querySelector(".quiz-form")
const output = document.querySelector("#output")

const answers = ["Right", "Obtuse", "Right", "Right", "Acute", "Acute", "60°", "40°", "Equilateral", "none"];

function formDataHandler(event){
    event.preventDefault();
    index = 0;
    sum = 0;
    const formDataaa = new FormData(quizForm);
    for(let value of formDataaa.values()){
        if(value === answers[index]){
            sum++;
        }
        index++;
    }
    output.innerText = `Your Final Score is ${sum}`
}


quizForm.addEventListener("submit", formDataHandler);


