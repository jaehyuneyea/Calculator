let displayValue = 0;

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
  }
}

function update(key) {
  if (key == 'clear') {
    displayValue = 0; // might need to come back to it to change stored values
  } else if (displayValue == 0 && key != '=') { // if displayvalue is 0 and key is not =
    displayValue = Number(key);
  } else {
    displayValue = String(displayValue) + key;
  }

  display.textContent = displayValue;
}