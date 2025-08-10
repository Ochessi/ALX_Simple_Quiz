// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Division by zero";
    return a / b;
}

// DOM elements
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const resultSpan = document.getElementById('calculation-result');

// Helper function to get input values
function getInputValues() {
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    return [num1, num2];
}

// Event listeners for operations
document.getElementById('add').addEventListener('click', () => {
    const [num1, num2] = getInputValues();
    resultSpan.textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', () => {
    const [num1, num2] = getInputValues();
    resultSpan.textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', () => {
    const [num1, num2] = getInputValues();
    resultSpan.textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', () => {
    const [num1, num2] = getInputValues();
    resultSpan.textContent = divide(num1, num2);
});