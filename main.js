const angles = document.querySelectorAll(".angles");
const output = document.querySelector("#output");
const anglesBtn = document.querySelector("#angles-btn")

anglesBtn.addEventListener("click", function sumofAngles (){
    let sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value)
    if (sum === 180){
        output.innerText = "yes its a valid triangle"
    }else{
        output.innerText = "Nope its Not a valid triangle"
    }
});