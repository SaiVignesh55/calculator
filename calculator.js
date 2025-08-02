let display = document.getElementById('display');
let current = '0';
let operator = null;
let previous = null;

function updateDisplay() {
  display.textContent = current;
}

function appendNumber(num) {
  if (current === '0' && num !== '.') {
    current = num;
  } else if(num === '.' && current.includes('.')) {
    return;
  } else {
    current += num;
  }
  updateDisplay();
}

function clearDisplay() {
  current = '0';
  previous = null;
  operator = null;
  updateDisplay();
}

function plusMinus() {
  current = (parseFloat(current) * -1).toString();
  updateDisplay();
}

function percent() {
  current = (parseFloat(current) / 100).toString();
  updateDisplay();
}

function operate(op) {
  if (operator !== null) calculate();
  previous = current;
  operator = op;
  current = '0';
}

function calculate() {
  if (operator && previous !== null) {
    let a = parseFloat(previous);
    let b = parseFloat(current);
    switch(operator) {
      case '+': current = (a + b).toString(); break;
      case '-': current = (a - b).toString(); break;
      case '*': current = (a * b).toString(); break;
      case '/': current = b !== 0 ? (a / b).toString() : "Error"; break;
    }
    operator = null;
    previous = null;
    updateDisplay();
  }
}

updateDisplay();
