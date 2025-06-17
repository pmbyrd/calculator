// const $displayResult = $(".input-result");
// const $clear = $(".clear");
// const $numbers = $(".number");
// const $form = $("form");
// const $operators = $(".math-operator");
// const $memory = $(".memory");
// const $func = $(".math-func");
// const $round = $(".math-round");
// let $result = $(".result");
// let displayValue = "";

// // *event listeners
// $clear.on("click", function () {
//   console.debug("clear button clicked");
//   displayValue = "";
//   $displayResult.text(displayValue);
// });

// $form.on("submit", function (e) {
//   console.debug("form submitted");
//   e.preventDefault();
//   calculate();
//   console.log("clicked", "form submitted");
// });

// $numbers.on("click", getNumbers);
// $operators.on("click", getOperator);

// // *functions
// function getNumbers() {
//   console.debug("getNumbers() called");
//   displayValue += $(this).val();
//   $displayResult.text(displayValue);
//   console.log("clicked", $(this).val());
// }

// function getOperator() {
//   console.debug("getOperator() called");
//   displayValue += $(this).val();
//   $displayResult.text(displayValue);
//   console.log("clicked", $(this).val());
// }

// function getFunc() {
//   console.debug("getFunc() called");
//   displayValue += $(this).val();
//   $displayResult.text(displayValue);
//   console.log("clicked", $(this).val());
// }

// function getRound() {
//   console.debug("getRound() called");
//   displayValue += $(this).val();
//   $displayResult.text(displayValue);
//   console.log("clicked", $(this).val());
// }

// function getMemory() {
//   console.debug("getMemory() called");
//   displayValue += $(this).val();
//   $displayResult.text(displayValue);
//   console.log("clicked", $(this).val());
// }

// function calculate(displayValue) {
//   const operatorsKeysAndValues = {
//     "+": add,
//     "-": subtract,
//     "*": multiply,
//     "÷": divide,
//     "±": negate,
//     π: circumfrance,
//     "x^y": exponent,
//   };
//   console.debug("calculate() called");
//   const operators = Object.keys(operatorsKeysAndValues);
//   console.log(operators);
//   displayValue = $displayResult.text();
//   console.log(displayValue);
//   // loop through the operators
//   // function sum(n) {
//   //     if (n <= 1) {
//   //       return n;
//   //     }
//   //     return n + sum(n - 1);
//   //   }
//   let displayValueArray = displayValue.split("");
//   displayValueArray.map(function(operators, index) {
//       console.table(operators, index);
//   })
//   for (let i = 0; i < operators.length; i++) {
//     if (displayValue.includes(operators[i])) {
//       let [a, b] = displayValue.split(operators[i]);
//       a = Number(a);
//       b = Number(b);
//       let restOfValues = displayValue.split(operators[i]);
      
//     //   I need to store the rest of the values to access them again later
//     // I am currently only storing three values at a time but if there are more than three they disappear
//         console.log(restOfValues);
//       let result = operatorsKeysAndValues[operators[i]](a, b);
//       console.log(`${a} ${operators[i]} ${b} = ${result}`);
//       $result.text(result);
//       console.log(displayValue);
//       return operatorsKeysAndValues[operators[i]](a, b);
//     } 
//   }
// }

// *math functions

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
function negate(a) {
  return -a;
}
function squareRoot(a) {
  return Math.sqrt(a);
}
function circumfrance(a) {
  return 2 * Math.PI * a;
}
