const $displayResult = $(".input-result");
const $clear = $(".clear");
const $numbers = $(".number");
const $form = $("form");
const $operators = $(".math-operator");
const $memory = $(".memory");
const $func = $(".math-func");
const $round = $(".math-round");
let $result = $(".result");
let displayValue = "";



// *event listeners
$clear.on("click", function () {
  console.debug("clear button clicked");
  displayValue = "";
  $displayResult.text(displayValue);
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
  displayValue += $(this).val();
  $displayResult.text(displayValue);
  console.log("clicked", $(this).val());
}

function getOperator() {
  console.debug("getOperator() called");
  displayValue += $(this).val();
  $displayResult.text(displayValue);
  console.log("clicked", $(this).val());
}

function getFunc() {
  console.debug("getFunc() called");
  displayValue += $(this).val();
  $displayResult.text(displayValue);
  console.log("clicked", $(this).val());
}

function getRound() {
  console.debug("getRound() called");
  displayValue += $(this).val();
  $displayResult.text(displayValue);
  console.log("clicked", $(this).val());
}

function getMemory() {
  console.debug("getMemory() called");
  displayValue += $(this).val();
  $displayResult.text(displayValue);
  console.log("clicked", $(this).val());
}  

function calculate(displayValue) {
    // the operators are in an object must handle the extraction of the key
   let start = 0
   let total = 0
//    let result = null

  const operatorsKeysAndValues = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "÷": divide,
    "±": negate,
    π: circumfrance,
    "x^y": exponent,
  };
  console.debug("calculate() called");
//   need to set a recurssive function so that way calculate is continuosly called as long as there is an operator stored
  const operators = Object.keys(operatorsKeysAndValues);
    console.log(operators);
    // get the display value
    displayValue = $displayResult.text();
    console.log(displayValue);
    // loop through the operators
    // function sum(n) {
    //     if (n <= 1) {
    //       return n;
    //     }
    //     return n + sum(n - 1);
    //   }
    while (operators.length > 0) {
        for (let i = 0; i < operators.length; i++) {
            // check if the display value includes the operator
            if (displayValue.includes(operators[i])) {
                console.log(operators[i]);
                // split the display value at the index after the operator into a seperate array
                let [a, b] = displayValue.split(operators[i]);
                a = Number(a);
                b = Number(b);
                let result = operatorsKeysAndValues[operators[i]](a, b);
                console.log(`${a} ${operators[i]} ${b} = ${result}`);
                $result.text(result);
                return operatorsKeysAndValues[operators[i]](a, b);
            }
            return result += operatorsKeysAndValues[operators[i]](a, b);
        }
    }
    // for (let i = 0; i < operators.length; i++) {
    //     // check if the display value includes the operator
    //     if (displayValue.includes(operators[i])) {
    //         console.log(operators[i]);
    //         // split the display value at the index after the operator into a seperate array
    //         let [a, b] = displayValue.split(operators[i]);
    //         a = Number(a);
    //         b = Number(b);
    //         let result = operatorsKeysAndValues[operators[i]](a, b);
    //         console.log(`${a} ${operators[i]} ${b} = ${result}`);
    //         $result.text(result);
    //         return operatorsKeysAndValues[operators[i]](a, b);
    //     }
    //     return result += operatorsKeysAndValues[operators[i]](a, b);
    // }
}

  // try using the already included text to practice
  // $displayValue = $displayResult.text();
  // if($displayValue.includes("+")) {
  //     let [a, b] = $displayValue.split("+");
  //     a = Number(a);
  //     b = Number(b);
  //     op = add(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("-")) {
  //     let [a, b] = $displayValue.split("-");
  //     a = Number(a);
  //     b = Number(b);
  //     op = subtract(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("*")) {
  //     let [a, b] = $displayValue.split("*");
  //     a = Number(a);
  //     b = Number(b);
  //     op = multiply(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("÷")) {
  //     let [a, b] = $displayValue.split("÷");
  //     a = Number(a);
  //     b = Number(b);
  //     op = divide(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("^")) {
  //     let [a, b] = $displayValue.split("^");
  //     a = Number(a);
  //     b = Number(b);
  //     op = exponent(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("%")) {
  //     let [a] = $displayValue.split("%");
  //     a = Number(a);
  //     op = percent(a);
  //     console.log(a, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("±")) {
  //     let [a] = $displayValue.split("±");
  //     a = Number(a);
  //     op = negate(a);
  //     console.log(a, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("√")) {
  //     let [a] = $displayValue.split("√");
  //     a = Number(a);
  //     op = squareRoot(a);
  //     console.log(a, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("π")) {
  //     let [a] = $displayValue.split("π");
  //     a = Number(a);
  //     op = circumfrance(a);
  //     console.log(a, op);
  //     $result.text(op);
  // }
  // if($displayValue.includes("x^y")) {
  //     let [a, b] = $displayValue.split("x^y");
  //     a = Number(a);
  //     b = Number(b);
  //     op = exponent(a, b);
  //     console.log(a, b, op);
  //     $result.text(op);
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
