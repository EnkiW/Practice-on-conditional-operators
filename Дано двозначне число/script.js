const number = prompt("Введіть двозначне число:");
const first = parseInt(number.charAt(0));
const second = parseInt(number.charAt(1));

if (first > second) {
    console.log("Перша цифра (" + first + ") більша за другу цифру (" + second + ").");
} else if (second > first) {
    console.log("Друга цифра (" + second + ") більша за першу цифру (" + first + ").");
} else {
    console.log("Обидві цифри рівні.");
}
