// Simple Calculator JavaScript

// Get the display element
let display = document.getElementById('result');

// Variables to store our numbers and operation

let firstNumber = '';
let secondNumber = '';
let operation = '';

// Function to append a number to the display
function appendResult(num) {
    if (operation === '') {
        firstNumber += num;
    } else {
        secondNumber += num;
    }
    updateDisplay();
}

// Function to set the operation
function setOperation(op) {
    if (firstNumber && !secondNumber) {
        operation = op;
        updateDisplay();
    }
}

// Function to clear the display
function clearResult() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    display.value = '0';
}
        
function deleteLastCharacter() {
    if (operation && secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operation) {
        operation = '';
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateDisplay();
}

// Function to calculate the result
function calculate() {
    if (!firstNumber || !operation) return;
    if (!secondNumber) secondNumber = firstNumber;
            
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
            
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: return;
    }
            
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    display.value = firstNumber;
}
        
function updateDisplay() {
    if (operation && secondNumber) {
        display.value = secondNumber;
    } else if (operation) {
        display.value = `${firstNumber} ${operation}`;
    } else {
        display.value = firstNumber || '0';
    }
}