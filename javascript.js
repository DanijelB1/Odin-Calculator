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

console.log(operate('-', 4, 7));
