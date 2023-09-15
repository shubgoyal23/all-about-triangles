const lenghtofTriangle = document.querySelector("#length")
const baseofTriangle = document.querySelector("#base")
const btn = document.querySelector("#area-btn")
const outputArea = document.querySelector("#output-area");

btn.addEventListener("click", function areaCalculate(){
    let areaofTriangle = (Number(lenghtofTriangle.value) * Number(baseofTriangle.value)) * 0.5;
    outputArea.innerText = "The Area of Triangle With Base "+ lenghtofTriangle.value +" and Height " + baseofTriangle.value +" is " + areaofTriangle;
})