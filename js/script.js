let label = document.querySelector('#label');
let btnDecrement = document.querySelector('#decrement');
let btnReset = document.querySelector('#reset');
let btnIncrement = document.querySelector('#increment');

let currentValue = 0;

btnIncrement.addEventListener("click",() =>{
    currentValue++;
    label.textContent = currentValue;
});

btnDecrement.addEventListener("click",() =>{
    currentValue--;
    label.textContent = currentValue;
});

btnReset.addEventListener("click",() =>{
    currentValue = 0;
    label.textContent = currentValue;
});