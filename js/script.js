const btnIncrement = document.getElementById("increment");
const btnReset = document.getElementById("reset");
const btnDecrement = document.getElementById("decrement");
const counterLabel = document.getElementById("label");

let currentValue = 0;

btnIncrement.addEventListener("click",() =>{
    currentValue++;
    counterLabel.textContent = currentValue;
});

btnDecrement.addEventListener("click",() =>{
    currentValue--;
    counterLabel.textContent = currentValue;
});

btnReset.addEventListener("click",() =>{
    currentValue = 0;
    counterLabel.textContent = currentValue;
});