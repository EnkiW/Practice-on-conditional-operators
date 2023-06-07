const number = parseInt(prompt("Введіть трьохзначсне число:"));
const number1 = Math.floor(number / 100);
const number2 = Math.floor((number % 100) / 10);
const number3 = number % 10;

if (number1 === number2 && number2 === number3) {
    console.log("Усі цифри числа однакові.");
} else {
    console.log("Не всі цифри числа однакові.");
}

if (number1 === number2 || number1 === number3 || number2 === number3) {
    console.log("Серед цифр є цифри, які співпадають.");
} else {
    console.log("Серед цифр немає цифр, які співпадають.");
}
