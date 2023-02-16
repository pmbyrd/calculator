console.log('Hello World!');
// intialize varaibles
// *elements from the html
const $display = $(".result");
const $buttons = $(".button");
// get the clear button by the data-type clear

// *elements to added by me
let $displayValue = "";

// *event listeners
$buttons.on("click", updateDisplay)
$("#operate").on("click", function() {
    console.log("clicked")
})
// $("#operate").on("click", operate)
// when a button is clicked that value is added to the display

// function operate

// each button with the class operate will perfrom a different action

// *Operate will perform the evaluation of the expression
// function operate() {
//     console.debug("operate");
//     if ($displayValue === "") return // *if the display is empty do nothing
//     if (!$displayValue === "") {
//         console.log("operate");
//         if ($displayValue.includes("+")) {
//             let $split = $displayValue.split("+")
//             let $result = Number($split[0]) + Number($split[1])
//             $displayValue = $result;
//             $display.text($result);
//         }
//     }   
//     console.log($displayValue)
// }

function updateDisplay() {
    console.log("updateDisplay");
    $displayValue += $(this).text();
    $display.text($displayValue);
    console.log($displayValue)
}
