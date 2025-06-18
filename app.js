//TODO use funtion to handle the arithmatic

//TODO will need to handle 3 variables at a time for arithmatic (2 numbers and an operator)

//TODO create an operate function. It should apple the correct operator and call the correct arithmatic function

//TODO HTML must include an =, a display and a clear

//TODO Create a fucntion that populates the display, should store the #s in a variable for the next step

//TODO Make the calculator work.  Srote the 1st and 2nd #s from the user inpurt and call the operate()
//Figure how to store all the values and correctly call the operate()

//TODO operate each pair of #s @ a time w/ the operator, update display, store value to hold for the next operation.  Round the decimals to not overflow the displya.  Careful w/ = sign a lot of #s. Clear should erase all values.
//make sure all numbers are preceived as numbers

function convertToNumber(num) {
 return parseInt(num) 
}

const operators = {
 "+" : (a, b) => a + b,
 "-" : (a, b) => a - b,
 "*" : (a, b) => a * b,
 "/" : (a, b) => a / b,
 "^" : (a, b) => a ** b,
 "%" : (a) => a / 100 ,
 "π" : (a) => 2 * Math.PI * a ,

}



const clear = document.querySelector(".clear")
const input = document.querySelector(".input-result")
const pad = document.querySelector(".pad")
console.log(clear, input.textContent)

function clearInput() {
  console.log(input.textContent)
  input.textContent = ""
}
clear.addEventListener("click", clearInput)
function operate(values) {
  
}

function handleInput(e) {
  let value = e.target.value
  console.log(value)
  input.append(value)
}

pad.addEventListener("click", handleInput)

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

