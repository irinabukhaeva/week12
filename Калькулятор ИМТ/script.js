let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("button");
let result = document.getElementById("result");
function calculateBMI() {
  let BMI = (+weight.value / Math.pow(+height.value / 100, 2)).toFixed(2);
  result.innerText = `Индекс массы тела (ИМТ): ${BMI}`;
}

button.addEventListener("click", calculateBMI);
