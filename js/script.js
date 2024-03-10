//creating elements
const myCounter = document.createElement("div");
const bodyCounter = document.createElement("div");
const btnCoutner = document.createElement("div");
const label = document.createElement("h1");
const btnDecrement = document.createElement("button");
const btnReset = document.createElement("button");
const btnIncrement = document.createElement("button");

//appendChild
document.body.appendChild(myCounter);
myCounter.appendChild(bodyCounter);
bodyCounter.appendChild(label);
bodyCounter.appendChild(btnCoutner);
btnCoutner.appendChild(btnDecrement);
btnCoutner.appendChild(btnReset);
btnCoutner.appendChild(btnIncrement);

//giving an Id to each element
myCounter.setAttribute("id", "container");
bodyCounter.setAttribute("id", "bodyCounter");
btnCoutner.setAttribute("id", "btnCounter");
label.setAttribute("id", "label");
btnDecrement.setAttribute("id", "decrement");
btnReset.setAttribute("id", "reset");
btnIncrement.setAttribute("id", "increment");

//giving a value to the label and to all buttons
label.innerText = "0";
btnDecrement.innerText = "-";
btnReset.innerText = "Reset";
btnIncrement.innerText = "+";

//making the counter works
let currentValue = 0;

btnIncrement.addEventListener("click", () => {
  currentValue++;
  label.innerText = currentValue;
});

btnDecrement.addEventListener("click", () => {
  currentValue--;
  label.innerText = currentValue;
});

btnReset.addEventListener("click", () => {
  currentValue = 0;
  label.innerText = currentValue;
});
