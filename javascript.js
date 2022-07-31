// functions 
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitForSecondOperand: false,
    operator: null,
}


const operators = {
    '+': function(a, b) {
        return a + b;
    },

    '-': function(a, b) {
        return a - b;
    },

    '*': function(a, b) {
        return a * b;
    },

    '/': function(a, b) {
        return a / b;
    },
}

function operate(operator, a, b) {
    return operators[operator](a, b);
}

//DOM 

const displayInput = document.getElementById('display');

const result = document.querySelector('.result');

const numbers = document.querySelectorAll('button');

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
    const target  = e.target;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        display();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        return;
    }
    if (target.classList.contains('all-clear')) {
        return;
    }
    if (target.classList.contains('equal')) {
        b = displayInput.value;
        result.innerHTML =  operate(selectedOperator, a, b);
        return;
    }
    inputNumber(target.value);
    display();
    })
})

function display() {
    displayInput.value = calculator.displayValue;
}

function inputNumber(number) {
    const displayValue = calculator.displayValue;
    const waitForSecondOperand = calculator.waitForSecondOperand;

    if (waitForSecondOperand === true) {
        calculator.displayValue = number;
        calculator.waitForSecondOperand = true;
    } else  {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
}




function inputDecimal(decimal) {
    if (!displayInput.Value.includes(decimal)) {
        displayInput.Value += decimal;
    }
}

function handleOperator(nextOperator) {
    const firstOperand = calculator.firstOperand;
    const displayValue = calculator.displayValue;
    const operator = calculator.operator;

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    }
    calculator.waitForSecondOperand = true;
    calculator.operator = nextOperator
}

a = 0;
b = 0;

let selectedOperator = "";

display()
