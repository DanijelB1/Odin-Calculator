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

const displayInput = document.getElementById('display');

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', function() {
        displayInput.value += this.value;
        displayInput.innerHTML = displayInput.value;
        console.log(displayInput.value);
    })
})



console.log(operate('-', 15, 7));
