console.log("Hello World!");

const $displayResult = $(".input-result");
const $clear = $(".clear");
const $numbers = $(".number");
const $form = $("form");
const $operators = $(".math-operator");
const $memory = $(".memory");
const $func = $(".math-func");
const $round = $(".math-round");
let $result = $(".result");
let $displayValue = "";
$displayValue.length = 40;
console.log($displayValue);

// *event listeners
$clear.on("click", function () {
  console.debug("clear button clicked");

  $displayValue = "";
  $displayResult.text($displayValue);
});

$form.on("submit", function (e) {
  console.debug("form submitted");
  e.preventDefault();
  calculate();
  console.log("clicked", "form submitted");
});

$numbers.on("click", getNumbers);
$operators.on("click", getOperator);

// *functions
function getNumbers() {
  console.debug("getNumbers() called");
  $displayValue += $(this).val();
  $displayResult.text($displayValue);
  console.log("clicked", $(this).val());
}

function getOperator() {
  console.debug("getOperator() called");
  $displayValue += $(this).val();
  $displayResult.text($displayValue);
  console.log("clicked", $(this).val());
}

function getFunc() {
  console.debug("getFunc() called");
  $displayValue += $(this).val();
  $displayResult.text($displayValue);
  console.log("clicked", $(this).val());
}

function getRound() {
  console.debug("getRound() called");
  $displayValue += $(this).val();
  $displayResult.text($displayValue);
  console.log("clicked", $(this).val());
}

function getMemory() {
  console.debug("getMemory() called");
  $displayValue += $(this).val();
  $displayResult.text($displayValue);
  console.log("clicked", $(this).val());
}

function calculate(a, b, op) {
  // store all operators in operators object
  const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "÷": divide,
    "^": exponent,
    "%": percent,
    "±": negate,
    "√": squareRoot,
    π: circumfrance,
    "x^y": exponent,
  };

  console.debug("calculate() called");
  $displayValue = $displayResult.text();

  // check for every operator in display value
  Object.keys(operators).forEach((operator) => {
    if ($displayValue.includes(operator)) {
      let [a, b] = $displayValue.split(operator);
      a = Number(a);
      b = Number(b);
      // call the corresponding function depending on operator used
      op = operators[operator](a, b);
      console.log(a, b, op);
      // set the result
      $result.text(op);
    }
  });
}

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
