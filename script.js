let displayValue = 0;
let operator;
let val1 = 0;

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function operate(op, a, b) {
  switch (op) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
  }
}

const display = document.querySelector('.display');
display.textContent = displayValue;

let buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
  button.addEventListener('click', buttonResponse)
})

function buttonResponse(evt) {
  switch (evt.target.id) {
    case 'one':
      update('1');
      break;
    case 'two':
      update('2');
      break;
    case 'three':
      update('3');
      break;
    case 'four':
      update('4');
      break;
    case 'five':
      update('5');
      break;
    case 'six':
      update('6');
      break;
    case 'seven':
      update('7');
      break;
    case 'eight':
      update('8');
      break;
    case 'nine':
      update('9');
      break;
    case 'zero':
      update(0);
      break;
    case 'clear':
      update('clear');
      break;
    case 'plus':
      update('+');
      break;
    case 'minus':
      update('-');
      break;
    case 'times':
      update('*');
      break;
    case 'divide':
      update('/');
      break;
    case 'equals':
      update('=');
  }
}

// called by the event listener that responds on button press of the calculator: determines current state of the calculator and determines
// appropriate action to display accordingly
function update(key) {

    // CLEAR CASE
  if (key == 'clear') {
    displayValue = 0; // might need to come back to it to change stored values
    val1 = 0;
    operator = undefined;
  
    // OPERATORS CASE
  } else if (key == '+' || key == '-' || key == '*' || key == '/') {
    if (val1 != 0) {
      displayValue = operate(key, Number(val1), Number(displayValue)); // if val1 is not empty (meaning a previous calculation was done), calculate that first and display it before overriding.
    }
    operator = key;
    val1 = displayValue;

    // EQUALS CASE
  } else if (key == '=') {
    if (val1 == 0 || displayValue == 0) return; // prevents displayvalue from disappearing when it is = 0
    displayValue = operate(operator, Number(val1), Number(displayValue)); // compute the value
    val1 = 0; // set val1 to zero because once equal is clicked we know the compute is finished until further numbers or operators are entered

    // FIRST NUMBER CASE
  } else if ((displayValue == 0 && !isNaN(Number(key))) || (operator != undefined && val1 == displayValue )) { // if displayvalue is 0 and key is not = OR some operator is ready and val1 is same as displayValue (means value is on standby since displayValue copies its value to val1)

    displayValue = Number(key);

    // NON FIRST NUMBER CASE
  } else {
    displayValue = String(displayValue) + key; // turn display number into string and append the following numbers onto it

  }
  display.textContent = displayValue; // display after any possible operations are finished

}

module.exports = calculator;