// Import from allCodes.js files
import factorial, { plus, minus, zarb, taqsim } from './Moudules/allCodes.js';
//import * as module from '../object/script.js'

// All variables
let inZarb = document.querySelector('.zarb'),
    inTaqsim = document.querySelector('.taqsim'),
    inPlus = document.querySelector('.plus'),
    inMinus = document.querySelector('.minus'),
    inFactorial = document.querySelector('.factorial'),
    aValue = document.querySelector('#value_A'),
    bValue = document.querySelector('#value_B'),
    output = document.querySelector('.output');
console.log(inFactorial);


// All events

inZarb.addEventListener('click', function () {
    output.innerHTML = zarb(aValue.value, bValue.value)

})
inTaqsim.addEventListener('click', function () {
    output.innerHTML = taqsim(aValue.value, bValue.value);
})
inMinus.addEventListener('click', function () {
    output.innerHTML = minus(aValue.value, bValue.value)
})
inPlus.addEventListener('click', function () {
    output.innerHTML = plus(aValue.value, bValue.value);
})
inFactorial.addEventListener('click', function () {
    output.innerHTML = factorial(aValue.value);
})

let num = '8866';
console.log(Number.apply);


