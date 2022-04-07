// Operators
let addBtn = document.querySelector(".add");
let substractBtn = document.querySelector(".substract");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");

// Dot
let dotBtn = document.querySelector(".dot");

// Buttons
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

// Equals
let equalsBtn = document.querySelector(".equals");

// Reset
let resetBtn = document.querySelector(".reset");

// Display
let displayResult = document.querySelector(".result");

let input = "0";

let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator = "";
let firstTime = true;

const updateInput = (command) => {
  if (command === "reset") {
    input = "0";
    firstNumber = 0;
    secondNumber = 0;
    displayResult.innerHTML = input;
    return input;
  }
  if (input === "0" && firstTime) {
    input = command;
    if (command === "-") {
      operator = "-";
    }
    firstTime = false;
    displayResult.innerHTML = input;
  } else {
    switch (command) {
      case "+":
        calculation(command);
        break;

      case "-":
        calculation(command);
        break;

      case "*":
        calculation(command);
        break;

      case "/":
        calculation(command);
        break;
      case "=":
        whenEquals();
        break;
    }

    if (command != "=") {
      input += command;
    }
    displayResult.innerHTML = input;
  }
};

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

// Keyboard event
window.addEventListener("keydown", (event) => {
  const reg = new RegExp("^[0-9]+$");
  if (
    event.key.match(reg) ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "." ||
    event.key === "Enter"
  ) {
    if (event.key === "Enter") {
      updateInput("=");
    } else {
      updateInput(event.key);
    }
  }
});

function decideOperator(num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return "No debí llegar aca";
  }
}

function calculation(command) {
  if (
    input.includes("+") ||
    input.includes("-") ||
    input.includes("*") ||
    input.includes("/")
  ) {
    if (input.split(operator).length > 2) {
      firstNumber = input.split(operator)[1] * -1;
      secondNumber = input.split(operator)[2];

      result = decideOperator(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );

      console.log(input);

      input = result;
      operator = command;
    } else {
      //-5+2
      if (input.split(operator)[0] !== "") {
        firstNumber = input.split(operator)[0];
        secondNumber = input.split(operator)[1];

        result = decideOperator(
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );

        console.log(input);

        input = result;
        operator = command;
      }
      operator = command;
    }
  } else {
    operator = command;
    console.log(operator);
  }
}

function whenEquals() {
  if (input.split(operator).length > 2) {
    firstNumber = input.split(operator)[1] * -1;
    secondNumber = input.split(operator)[2];
  } else {
    firstNumber = input.split(operator)[0];
    secondNumber = input.split(operator)[1];
  }

  result = decideOperator(parseFloat(firstNumber), parseFloat(secondNumber));

  console.log(result);

  input = result;
  input = input.toString();
  if (input.includes("-")) {
    operator = "-";
  }
}
