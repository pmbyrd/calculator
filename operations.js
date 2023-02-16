const $clear = $("[data-type='clear']");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const exponent = (a, b) => a ** b;
const percent = (a) => a / 100;
const negate = (a) => -a;
const squareRoot = (a) => Math.sqrt(a);

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "^":
      return exponent(a, b);
    case "%":
      return percent(a);
    case "neg":
      return negate(a);
    case "sqrt":
      return squareRoot(a);
    default:
      return null;
  }
};

// make it so that way the CE does not display to the screen
$clear.on("click", function () {})