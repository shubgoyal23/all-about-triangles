const anglesHyp = document.querySelectorAll(".angles-hyp");
const outputHyp = document.querySelector("#output-hyp");
const anglesBtnHyp = document.querySelector("#angles-btn-hyp");

anglesBtnHyp.addEventListener("click", function calculatHyp(){
    let hyp = Math.sqrt(Number(anglesHyp[0].value)**2 + Number(anglesHyp[1].value)**2)
    hyp =Math.round(hyp)
    outputHyp.innerText = "Hypotenuse is around " + hyp
});