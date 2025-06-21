//TODO use funtion to handle the arithmatic

//TODO will need to handle 3 variables at a time for arithmatic (2 numbers and an operator)

//TODO create an operate function. It should apple the correct operator and call the correct arithmatic function

//TODO HTML must include an =, a display and a clear

//TODO Create a fucntion that populates the display, should store the #s in a variable for the next step

//TODO Make the calculator work.  Srote the 1st and 2nd #s from the user inpurt and call the operate()
//Figure how to store all the values and correctly call the operate()

//TODO operate each pair of #s @ a time w/ the operator, update display, store value to hold for the next operation.  Round the decimals to not overflow the displya.  Careful w/ = sign a lot of #s. Clear should erase all values.
//make sure all numbers are preceived as numbers

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "**": (a, b) => a ** b,
};

const mathFunctions = {
  "%": (a) => a / 100,
  π: (a) => 2 * Math.PI * a,
};

const clear = document.querySelector(".clear");
const input = document.querySelector(".input-result");
const pad = document.querySelector(".pad");
const evaluateBtn = document.querySelector(".evaluate");
const result = document.querySelector(".result");

function convertToNumber(num) {
  return parseInt(num);
}

function handleInput(e) {
  let value = e.target.value;
  let operator;
  if (e.target.value === "CE") return;
  if (e.target.value === "=") return;
  console.log(value);
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
  let index = operatorObj.index;
  let content = input.textContent;
  if (!input.textContent.includes(operator)) {
    console.log("no operator found");
  } else {
    console.log(true, operator);
  }
  let [a, b] = content.split(operator);
  return [parseInt(a), parseInt(b), operator];
}

//TODO find away to apply the correct operator to the function
function evaluate(a, b, operator) {
  //this function should only be called with the text content has the 3 variables that can be called
  [a, b, operator] = getVariables();
  console.log(`a: ${a}, b: ${b}, operator: ${operator}`);
  console.log(typeof a);
  let mathFunc = operators[operator]
  console.log(mathFunc)
  return mathFunc(a,b)
}
//TODO find a way to limit the text input that after one math-operator has been addded then another one can not be added.

//event listeneres places here to help add to clarity of reading
pad.addEventListener("click", handleInput);
clear.addEventListener("click", () => {
  input.textContent = "";
  console.log(input.textContent);
});
evaluateBtn.addEventListener("click", getOperator);

function add(a, b = 0) {
  return a + b;
}
function subtract(a, b = 0) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function exponent(a, b) {
  return a ** b;
}
function percent(a) {
  return a / 100;
}
//TODO add conditionals to this negate function
function negate(a) {
  return -a;
}
function squareRoot(a) {
  return Math.sqrt(a);
}
function circumfrance(a) {
  return 2 * Math.PI * a;
}
