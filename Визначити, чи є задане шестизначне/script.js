function num(number) {
    const str = String(number);
    const revers = str.split('').reverse().join('');

    return str === revers;
}

const number1 = 123321;
const number2 = 147741;

console.log(num(number1));
console.log(num(number2));
