// functions 

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

const displayInput = document.querySelector('.input-display');

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayInput.innerHTML = number.value
        console.log(number.value)
    })
})


console.log(operate('-', 15, 7));
