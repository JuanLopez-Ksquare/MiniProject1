let addBtn = document.querySelector(".add");
let substractBtn = document.querySelector(".substract");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");

let dotBtn = document.querySelector(".dot");

let zeroBtn = document.querySelector(".zero");
let oneBtn = document.querySelector(".one");
let twoBtn = document.querySelector(".two");
let threeBtn = document.querySelector(".three");
let fourBtn = document.querySelector(".four");
let fiveBtn = document.querySelector(".five");
let sixBtn = document.querySelector(".six");
let sevenBtn = document.querySelector(".seven");
let eightBtn = document.querySelector(".eight");
let nineBtn = document.querySelector(".nine");

let equalsBtn = document.querySelector(".equals");

let resetBtn = document.querySelector(".reset");

let displayResult = document.querySelector(".result");

let input = "0";

const updateInput = command => {
  if(input ==="0") {
    input = command;
    displayResult.innerHTML = input;
  }
  else
  {
    input += command;
    displayResult.innerHTML = input;
  }

}

// Number Buttons
zeroBtn.addEventListener("click", () => {
  updateInput("0");
});

oneBtn.addEventListener("click", () => {
  updateInput("1");
});

twoBtn.addEventListener("click", () => {
  updateInput("2");
});

threeBtn.addEventListener("click", () => {
  updateInput("3");
});

fourBtn.addEventListener("click", () => {
  updateInput("4");
});

fiveBtn.addEventListener("click", () => {
  updateInput("5");
});

sixBtn.addEventListener("click", () => {
  updateInput("6");
});

sevenBtn.addEventListener("click", () => {
  updateInput("7");
});

eightBtn.addEventListener("click", () => {
  updateInput("8");
});

nineBtn.addEventListener("click", () => {
  updateInput("9");
});

// Equals Button
equalsBtn.addEventListener("click", () => {
  updateInput("=");
});

// Operator Buttons
addBtn.addEventListener("click", () => {
  updateInput("+");
});

substractBtn.addEventListener("click", () => {
  updateInput("-");
});

multiplyBtn.addEventListener("click", () => {
  updateInput("*");
});

divideBtn.addEventListener("click", () => {
  updateInput("/");
});

// Dot Button
dotBtn.addEventListener("click", () => {
  updateInput(".");
});

// Reset Button
resetBtn.addEventListener("click", () => {
  updateInput("reset");
});
