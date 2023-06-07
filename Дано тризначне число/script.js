const number = parseInt(prompt("Введіть тризначне число:"));
const number1 = Math.floor(number / 100);
const number2 = Math.floor((number % 100) / 10);
const number3 = number % 10;

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;

if (sum % 2 === 0) {
    console.log("Сума цифр є парною.");
} else {
    console.log("Сума цифр не є парною.");
}

if (sum % 5 === 0) {
    console.log("Сума цифр кратна числу 5.");
} else {
    console.log("Сума цифр не кратна числу 5.");
}

if (product > 100) {
    console.log("Добуток цифр більший за 100.");
} else {
    console.log("Добуток цифр не більший за 100.");
}
