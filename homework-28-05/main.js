let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
let result = document.querySelector('#result');

plus.addEventListener('click', () => {
    result.value = +firstNumber.value + +secondNumber.value;
})

minus.addEventListener('click', () => {
    result.value = +firstNumber.value - +secondNumber.value;
})