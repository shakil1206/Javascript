const number = 202.22;
const number1 = Number.parseFloat(number);
const number2 = Number.parseInt(number);
console.log(number1.toFixed(4), number1.toPrecision(6), number2,  Number.isInteger(number2), Number.isFinite(10/0));

const number3=NaN;
console.log(Number.isNaN(number3), Number.isSafeInteger(number1));