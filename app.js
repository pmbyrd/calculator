//TODO HTML must include an =, a display and a clear

//TODO Make the calculator work.  Srote the 1st and 2nd #s from the user inpurt and call the operate()
//Figure how to store all the values and correctly call the operate()

//TODO operate each pair of #s @ a time w/ the operator, update display, store value to hold for the next operation.  Round the decimals to not overflow the displya.  Careful w/ = sign a lot of #s. Clear should erase all values.
//make sure all numbers are preceived as numbers

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "÷": (a, b) => a / b,
  "**": (a, b) => a ** b,
};

const mathFunctions = {
  "%": (a) => a / 100,
  π: (a) => 2 * Math.PI * a,
  //TODO add in negate
  "+-": (a) => -a,
};

const clear = document.querySelector(".clear");
const input = document.querySelector(".input-result");
const pad = document.querySelector(".pad");
const evaluateBtn = document.querySelector(".evaluate");
const result = document.querySelector(".result");
let mathOperator = 0;

function handleInput(e) {
  let value = e.target.value;
  if (e.target.value === "CE") return;
  if (e.target.value === "=") return;
  if (e.target.classList.contains("math-operator")) {
    if (input.textContent.length === 0) return;
    mathOperator++;
    console.log(mathOperator);
  }
  if (mathOperator > 1) return;
  input.append(value);
}

function getOperatorKeys() {
  const keys = Object.keys(operators).join(" ");
  return keys;
}

function getOperator() {
  let keys = getOperatorKeys();
  let content = input.textContent;
  for (index of content) {
    for (key of keys) {
      if (content.includes(key)) {
        let keyIndex = content.indexOf(key);
        return {
          operator: key,
          index: keyIndex,
        };
      }
    }
  }
}

function getVariables() {
  let operatorObj = getOperator();
  let operator = operatorObj.operator;
  let content = input.textContent;
  if (!input.textContent.includes(operator)) {
    console.log("no operator found");
  } else {
    console.log(true, operator);
  }
  let [a, b] = content.split(operator);
  console.log(+a, +b)
  return [+a, +b, operator];
}

function operate(a, b, operator) {
  let sum;
  [a, b, operator] = getVariables();
  let mathFunc = operators[operator];
  sum = mathFunc(a, b);
  return roundDecimal(sum)
}

function roundDecimal(sum){
  if (sum % 1 !== 0) {
    sum = Math.round(sum * 100) / 100;
  }
  return sum;
}

function updateResult() {
  //when evaluateBtn is pressed I want to change show the results of the operate to the result and to clear the input
  let sum = operate();
  console.log(sum);
  result.textContent = sum;
  input.textContent = "";
  mathOperator = 0;
}

// TODO handle misc inputs

//event listeneres placed here to help add with clarity
pad.addEventListener("click", handleInput);
clear.addEventListener("click", () => {
  input.textContent = "";
});
evaluateBtn.addEventListener("click", updateResult);
