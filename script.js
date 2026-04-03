/**
 * JS Calculator - Professional Implementation
 * Demonstrates clean architecture and JavaScript best practices
 */

// ===================================
// CALCULATOR STATE MANAGEMENT
// ===================================

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    /**
     * Reset calculator to initial state
     */
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
    }

    /**
     * Delete the last character from current operand
     */
    delete() {
        if (this.shouldResetScreen) return;
        
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    /**
     * Append number to the current operand
     * @param {string} number - The number or decimal point to append
     */
    appendNumber(number) {
        // Reset screen after calculation
        if (this.shouldResetScreen) {
            this.currentOperand = '0';
            this.shouldResetScreen = false;
        }

        // Prevent multiple decimal points
        if (number === '.' && this.currentOperand.includes('.')) return;

        // Handle initial zero
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
    }

    /**
     * Select an operation and prepare for next operand
     * @param {string} operation - The mathematical operation (+, -, ×, ÷)
     */
    chooseOperation(operation) {
        // Prevent operation on empty input
        if (this.currentOperand === '') return;

        // Complete previous calculation if exists
        if (this.previousOperand !== '') {
            this.calculate();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    /**
     * Perform the calculation based on selected operation
     */
    calculate() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // Validate operands
        if (isNaN(prev) || isNaN(current)) return;

        // Perform calculation based on operation
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                // Handle division by zero
                if (current === 0) {
                    alert('Error: Cannot divide by zero');
                    this.clear();
                    this.updateDisplay();
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        // Format result and update state
        this.currentOperand = this.formatResult(result);
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    /**
     * Format calculation result to prevent overflow
     * @param {number} number - The number to format
     * @returns {string} Formatted number string
     */
    formatResult(number) {
        // Handle very large or very small numbers
        if (Math.abs(number) > 999999999999) {
            return number.toExponential(6);
        }

        // Round to prevent floating point errors
        const rounded = Math.round(number * 100000000) / 100000000;
        
        // Remove trailing zeros after decimal
        return rounded.toString();
    }

    /**
     * Format number for display with thousand separators
     * @param {string} number - The number string to format
     * @returns {string} Formatted display string
     */
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    /**
     * Update the calculator display
     */
    updateDisplay() {
        this.currentOperandElement.textContent = this.getDisplayNumber(this.currentOperand);
        
        if (this.operation != null) {
            this.previousOperandElement.textContent = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }
}

// ===================================
// DOM ELEMENTS SELECTION
// ===================================

const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-action="clear"]');
const deleteButton = document.querySelector('[data-action="delete"]');
const equalsButton = document.querySelector('[data-action="equals"]');

// ===================================
// CALCULATOR INITIALIZATION
// ===================================

const calculator = new Calculator(previousOperandElement, currentOperandElement);

// ===================================
// EVENT LISTENERS - BUTTON CLICKS
// ===================================

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
    });
});

// Clear button
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

// Delete button
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

// Equals button
equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});

// ===================================
// KEYBOARD SUPPORT
// ===================================

/**
 * Map keyboard keys to calculator operations
 */
const keyMap = {
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    '.': '.',
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷',
    'Enter': '=',
    '=': '=',
    'Backspace': 'delete',
    'Delete': 'delete',
    'Escape': 'clear'
};

/**
 * Handle keyboard input
 */
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const mappedKey = keyMap[key];

    if (!mappedKey) return;

    // Prevent default behavior for certain keys
    if (['/', '*', '-', '+', '=', 'Enter'].includes(key)) {
        event.preventDefault();
    }

    // Handle number and decimal input
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(mappedKey)) {
        calculator.appendNumber(mappedKey);
        animateButton(`[data-number="${mappedKey}"]`);
    }
    // Handle operators
    else if (['+', '-', '×', '÷'].includes(mappedKey)) {
        calculator.chooseOperation(mappedKey);
        animateButton(`[data-operator="${mappedKey}"]`);
    }
    // Handle equals
    else if (mappedKey === '=') {
        calculator.calculate();
        animateButton('[data-action="equals"]');
    }
    // Handle delete
    else if (mappedKey === 'delete') {
        calculator.delete();
        animateButton('[data-action="delete"]');
    }
    // Handle clear
    else if (mappedKey === 'clear') {
        calculator.clear();
        animateButton('[data-action="clear"]');
    }

    calculator.updateDisplay();
});

/**
 * Animate button press for keyboard input
 * @param {string} selector - CSS selector for the button
 */
function animateButton(selector) {
    const button = document.querySelector(selector);
    if (!button) return;

    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

    setTimeout(() => {
        button.style.transform = '';
        button.style.boxShadow = '';
    }, 100);
}

// ===================================
// INITIAL DISPLAY UPDATE
// ===================================

calculator.updateDisplay();

// ===================================
// SPLASH SCREEN MANAGEMENT
// ===================================

/**
 * Remove splash screen after animation completes
 */
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splashScreen');
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000);
});
