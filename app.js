console.log('Hello World!');
// intialize varaibles
// *elements from the html
const $display = $(".result");
const $buttons = $(".button");

// *elements to added by me
let $displayValue = "";

// *event listeners
$buttons.on("click", updateDisplay)
// when a button is clicked that value is added to the display

// function operate

// each button with the class operate will perfrom a different action

// *Operate will perform the evaluation of the expression
function operate() {
    console.log("operate");

}

function updateDisplay() {
    console.log("updateDisplay");
    $displayValue += $(this).text();
    $display.text($displayValue);
    console.log($displayValue)
}
