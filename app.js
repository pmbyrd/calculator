console.log('Hello World!');
// intialize varaibles
// *elements from the html
const $displayResult = $(".result");
const $clear = $(".clear");
const $numbers = $(".number");
const $form = $("form");
const $operators = $(".math-operator");
const $memory = $(".memory");
const $func = $(".math-func");
const $round = $(".math-round");



// *elements to added by me
let $displayValue = "";


// *event listeners
$clear.on("click", function () {
    console.debug("clear button clicked");
    $displayValue = "";
    $displayResult.text($displayValue);
});

$form.on("submit", function (e) {
    console.debug("form submitted");
    e.preventDefault();
    if(($(this).hasClass("number"))){
        console.log("number clicked");
    }
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




