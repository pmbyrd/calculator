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
  "+": add(),
  "-": subtract(),
  "*": multiply(),
  "/": divide(),
  "^": exponent(),
};

const mathFunctions = {
  "%": (a) => a / 100,
  π: (a) => 2 * Math.PI * a,
};

let a = "";
let b = "";
const clear = document.querySelector(".clear");
const input = document.querySelector(".input-result");
const pad = document.querySelector(".pad");
const evaluate = document.querySelector(".evaluate");
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
//this function should handle the the operators to perfrom arthimatic operations
function getOperator() {
  let keys = getOperatorKeys();
  let values = input.textContent;
  for (index of values) {
    for (key of keys) {
      if (values.includes(key)) {
       let keyIndex = values.indexOf(key)
       return {
        operator: key,
        index: keyIndex,
       }
      }
    }
  }
  return "hello";
}

function getVariables() {
  let operatorObj = getOperator()
  let operator = operatorObj.operator
  let index = operatorObj.index
  let content = input.textContent
  if (!input.textContent.includes(operator))  {
    console.log("no operator found")
  } else {
    console.log(true, operator)
  }
  let [a, b] = content.split(operator)
  console.log(`a: ${a}, b: ${b}`)
  return [parseInt(a), parseInt(b), operator]
}



//event listeneres places here to help add to clarity of reading
pad.addEventListener("click", handleInput);
clear.addEventListener("click", () => {
  input.textContent = "";
  console.log(input.textContent);
});
evaluate.addEventListener("click", getOperator);

// function handleNumbers(e) {
//   let number;
//   if (e.target.classList.contains("number")) {
//     number = parseInt(e.target.value);
//   }
//   return number;
// }

// function handleOperator(e) {
//   let operator
//   let mathFunction
//   if (e.target.classList.contains("math-operator")) {
//     console.log(e.target.className)
//     operator = e.target.value
//     let target = e.target.className.split(" ")
//     mathFunction = target[1]
//     console.log(mathFunction)
//   }
//   return [operator, mathFunction]
// }

// handleInput()
// function handleOpertors(e) {}
// document.addEventListener("click", handleNumbers);
// document.addEventListener("click", handleOperator);
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
