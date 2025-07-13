// Simple Calculator JavaScript

// Get the display element
let display = document.getElementById('display');

// Variables to store our numbers and operation

let firstNumber = '';
let secondNumber = '';
let operation = '';

// Function to append a number to the display
function appendResult(num) {
    if (operation === '') {
        firstNumber += num;
        display.value = firstNumber;
    } else {
        secondNumber += num;
        display.value = secondNumber;
    }
}

// Function to set the operation
function setOperation(op) {
    operation = op;
    display.value = '';
}

// Function to clear the display
function clearResult() {
    // Do this
    firstNumber = '';
    secondNumber = '';
    operation = '';
    display.value = '';

}


// Function to calculate the result
function calculate() {
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    // Do this
    if (isNaN(num1) || isNaN(num2)) return;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}
