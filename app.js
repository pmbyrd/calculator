//TODO use funtion to handle the arithmatic 

//TODO will need to handle 3 variables at a time for arithmatic (2 numbers and an operator)

//TODO create an operate function. It should apple the correct operator and call the correct arithmatic function

//TODO HTML must include an =, a display and a clear

//TODO Create a fucntion that populates the display, should store the #s in a variable for the next step

//TODO Make the calculator work.  Srote the 1st and 2nd #s from the user inpurt and call the operate()
//Figure how to store all the values and correctly call the operate()

//TODO operate each pair of #s @ a time w/ the operator, update display, store value to hold for the next operation.  Round the decimals to not overflow the displya.  Careful w/ = sign a lot of #s. Clear should erase all values.
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
