let currentInput = '';
let previousInput = '';
let operator = '';

function press(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '') return;
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput || previousInput || '0';
}
