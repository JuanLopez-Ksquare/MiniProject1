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
let equalsPressed = false;
let dot = false;
let minusFlag = false;
const reg = new RegExp("^[0-9]+$");
const reg2 = new RegExp("^[1-9]+$");

const updateInput = (command) => {
  if (command === "reset") {
    input = "0";
    firstNumber = 0;
    secondNumber = 0;
    dot = false;
    displayResult.innerHTML = input;
    return input;
  }
  if (input === "0" && firstTime) {
    switch (command) {
      case "-":
        input = command;
        operator = command;
        break;
      case "+":
        input += command;
        operator = command;
        break;
      case "*":
        input += command;
        operator = command;
        break;
      case "/":
        input += command;
        operator = command;
        break;
      case "=":
        break;
      default:
        input = command;
        break;
    }
    firstTime = false;
    displayResult.innerHTML = input;
  } else if (input === "0") {
    switch (command) {
      case "-":
        input = command;
        operator = "-";
        break;
      case "+":
        input += command;
        operator = command;
        break;
      case "*":
        input += command;
        operator = command;
        break;
      case "/":
        input += command;
        operator = command;
        break;
      case "=":
        break;
      default:
        input = command;
        break;
    }
    displayResult.innerHTML = input;
    equalsPressed = false;
  } else {
    if (equalsPressed && command.match(reg)) {
      result = 0;
      input = "";
      displayResult.innerHTML = input;
      equalsPressed = false;
      dot = false;
    } else if (equalsPressed && command == ".") {
      result = 0;
      input = "";
      displayResult.innerHTML = input;
      equalsPressed = false;
      dot = true;
    }
    switch (command) {
      case "+":
        if (
          input.slice(-1) === "+" ||
          input.slice(-1) === "-" ||
          input.slice(-1) === "*" ||
          input.slice(-1) === "/"
        ) {
          let arr = [...input];
          arr.pop();
          arr.push(command);
          input = arr.join("");
          operator = command;
          minusFlag = true;
        } else {
          minusFlag = true;
          calculation(command);
          equalsPressed = false;
        }
        break;

      case "-":
        if (
          input.slice(-1) === "+" ||
          input.slice(-1) === "-" ||
          input.slice(-1) === "*" ||
          input.slice(-1) === "/"
        ) {
          if (minusFlag) {
            minusFlag = false;
          } else {
            let arr = [...input];
            arr.pop();
            arr.push(command);
            input = arr.join("");
            operator = command;
          }
        } else {
          calculation(command);
          equalsPressed = false;
        }
        break;

      case "*":
        if (
          input.slice(-1) === "+" ||
          input.slice(-1) === "-" ||
          input.slice(-1) === "*" ||
          input.slice(-1) === "/"
        ) {
          let arr = [...input];
          arr.pop();
          arr.push(command);
          input = arr.join("");
          operator = command;
          minusFlag = true;
        } else {
          minusFlag = true;
          calculation(command);
          equalsPressed = false;
        }
        break;

      case "/":
        if (
          input.slice(-1) === "+" ||
          input.slice(-1) === "-" ||
          input.slice(-1) === "*" ||
          input.slice(-1) === "/"
        ) {
          let arr = [...input];
          arr.pop();
          arr.push(command);
          input = arr.join("");
          operator = command;
          minusFlag = true;
        } else {
          minusFlag = true;
          calculation(command);
          equalsPressed = false;
        }
        break;
      case "=":
        whenEquals();
        break;
    }

    if (command !== "=") {
      if (
        input.slice(-1) === "+" ||
        input.slice(-1) === "*" ||
        input.slice(-1) === "/"
      ) {
        if (command === "+" || command === "*" || command === "/") {
          let arr = [...input];
          arr.pop();
          arr.push(command);
          input = arr.join("");
        } else if (command === "-") {
          input += command;
        } else {
          input += command;
        }
      } else if (input.slice(-1) === "-" && !minusFlag) {
        if (
          command === "+" ||
          command === "-" ||
          command === "*" ||
          command === "/"
        ) {
          let arr = [...input];
          arr.pop();
          arr.push(command);
          input = arr.join("");
        } else {
          input += command;
        }
      } else {
        input += command;
      }
    }
    displayResult.innerHTML = input;
  }
};

// Number Buttons
zeroBtn.addEventListener("click", () => {
  if (
    input[input.length - 2] !== "+" &&
    input[input.length - 2] !== "-" &&
    input[input.length - 2] !== "*" &&
    input[input.length - 2] !== "/"
  ) {
    updateInput("0");
  } else {
    if (input.slice(-1).match(reg2) || input.slice(-1) === ".") {
      updateInput("0");
    }
  }
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
  if (input.slice(-1) !== ".") {
    if (input.includes(".")) {
      dot = true;
    } else {
      dot = false;
    }
    updateInput("=");
  }
});

// Operator Buttons
addBtn.addEventListener("click", () => {
  if (input.slice(-1) !== ".") {
    if (checkOperators() < 2) {
      dot = false;
      updateInput("+");
    }
    if (checkOperators() == 2 && input.slice(-1).match(reg)) {
      dot = false;
      updateInput("+");
    }
  }
});

substractBtn.addEventListener("click", () => {
  if (input.slice(-1) !== ".") {
    if (checkOperators() < 2) {
      dot = false;
      updateInput("-");
    }
    if (checkOperators() == 2 && input.slice(-1).match(reg)) {
      dot = false;
      updateInput("-");
    }
  }
});

multiplyBtn.addEventListener("click", () => {
  if (input.slice(-1) !== ".") {
    if (checkOperators() < 2) {
      dot = false;
      updateInput("*");
    }
    if (checkOperators() == 2 && input.slice(-1).match(reg)) {
      dot = false;
      updateInput("*");
    }
  }
});

divideBtn.addEventListener("click", () => {
  if (input.slice(-1) !== ".") {
    if (checkOperators() < 2) {
      dot = false;
      updateInput("/");
    }
    if (checkOperators() == 2 && input.slice(-1).match(reg)) {
      dot = false;
      updateInput("/");
    }
  }
});

// Dot Button
dotBtn.addEventListener("click", () => {
  if (dot) {
  } else {
    updateInput(".");
    dot = true;
  }
});

// Reset Button
resetBtn.addEventListener("click", () => {
  updateInput("reset");
});

// Keyboard event
window.addEventListener("keydown", (event) => {
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
      if (input.slice(-1) !== ".") {
        updateInput("=");
      }
    } else if (event.key === ".") {
      if (dot) {
      } else {
        updateInput(".");
        dot = true;
      }
    } else {
      if (event.key === "0") {
        if (
          input[input.length - 2] !== "+" &&
          input[input.length - 2] !== "-" &&
          input[input.length - 2] !== "*" &&
          input[input.length - 2] !== "/"
        ) {
          updateInput("0");
        } else {
          if (input.slice(-1).match(reg2) || input.slice(-1) === ".") {
            updateInput(event.key);
          }
        }
      } else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
      ) {
        if (input.slice(-1) !== ".") {
          if (checkOperators() < 2) {
            dot = false;
            updateInput(event.key);
          }
          if (checkOperators() == 2 && input.slice(-1).match(reg)) {
            dot = false;
            updateInput(event.key);
          }
        }
      } else {
        updateInput(event.key);
      }
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
      return parseFloat(input);
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
      let arr = [];
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "+" ||
          input[i] === "-" ||
          input[i] === "/" ||
          input[i] === "*"
        ) {
          arr.push(input[i]);
        }
      }
      operator = arr[1];
      if (input.split(operator)[0] === "") {
        firstNumber = input.split(operator)[1] * -1;
        secondNumber = input.split(operator)[2];
      } else {
        firstNumber = input.split(operator)[0];
        secondNumber = input.split(operator)[1];
      }

      result = decideOperator(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      if (!Number.isNaN(result)) {
        input = result;
        input = input.toString();
        operator = command;
      }
    } else {
      if (input[0] === "-") {
        let arr = [];
        for (let i = 0; i < input.length; i++) {
          if (
            input[i] === "+" ||
            input[i] === "-" ||
            input[i] === "/" ||
            input[i] === "*"
          ) {
            arr.push(input[i]);
          }
        }
        console.log(arr);
        operator = arr[1];
      }
      console.log(operator);
      firstNumber = input.split(operator)[0];
      secondNumber = input.split(operator)[1];

      result = decideOperator(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      console.log(input);
      if (firstNumber === "0" && secondNumber === "0" && operator === "/") {
        input = "Error";
      } else if (!Number.isNaN(result)) {
        input = result;
        input = input.toString();
        operator = command;
      }
    }
  } else {
    operator = command;
  }
}

function whenEquals() {
  if (input.split(operator).length > 2) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      if (
        input[i] === "+" ||
        input[i] === "-" ||
        input[i] === "/" ||
        input[i] === "*"
      ) {
        arr.push(input[i]);
      }
    }
    if (input.split(operator)[0] === "") {
      firstNumber = input.split(operator)[1] * -1;
      secondNumber = input.split(operator)[2];
    } else {
      firstNumber = input.split(operator)[0];
      secondNumber = input.split(operator)[1];
    }
  } else {
    if (input[0] === "-") {
      let arr = [];
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "+" ||
          input[i] === "-" ||
          input[i] === "/" ||
          input[i] === "*"
        ) {
          arr.push(input[i]);
        }
      }
      operator = arr[1];
    }
    firstNumber = input.split(operator)[0];
    secondNumber = input.split(operator)[1];
    console.log(input.split(operator));
  }

  result = decideOperator(parseFloat(firstNumber), parseFloat(secondNumber));
  console.log(result);
  if (firstNumber === "0" && secondNumber === "0" && operator === "/") {
    input = "Error";
  } else if (!Number.isNaN(result)) {
    input = result.toString();
    if (input.includes("-")) {
      operator = "-";
    }
    dot = false;
    equalsPressed = true;
  }
}

function checkOperators() {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (
      input[i] === "+" ||
      input[i] === "-" ||
      input[i] === "*" ||
      input[i] === "/"
    ) {
      count++;
    }
  }
  return count;
}
