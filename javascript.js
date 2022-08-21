// functions 

a = '0';
b = '0';

const calculator = {
    displayValue: '0',
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
    result.innerHTML = operators[operator](a, b);
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

        if (a === '0') {
            a = parseFloat(displayInput.value)
            calculator.displayValue = '';
            calculator.operator = target.value;
            display();
            console.log(a);
            return;
        } else if (b === '0') {
            b = parseFloat(displayInput.value)
            operate(calculator.operator, a, b)
            b = '0';
            calculator.operator = target.value;
            a = parseFloat(result.innerHTML);
            calculator.displayValue = '';
            display();
            return;  
        } else if (b === 'wait' && displayInput.value ==='') {
            b = '0'
            return;
        }
        operate(target.value, a, b)
        a = parseFloat(result.innerHTML);
        display()
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        a = '0';
        b = '0';
        calculator.displayValue = '';
        calculator.operator = null;
        displayInput.value = '';
        result.innerHTML = '0';
        return;
    }  
    if (target.classList.contains('equal')) {
        b = parseFloat(displayInput.value)
        operate(calculator.operator, a, b);
        a = parseFloat(result.innerHTML);
        b = 'wait';
        calculator.displayValue = '';
        display();
        return

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
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }

function inputDecimal(decimal) {
    if (!calculator.displayValue.includes(decimal)) {
        calculator.displayValue += decimal;
    }
}



let selectedOperator = "";

display()
console.log(a)