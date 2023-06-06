const number1 = parseFloat(prompt("Введіть перше число:"));
const number2 = parseFloat(prompt("Введіть друге число:"));

if (number1 > number2) {
    alert(number1 + " більше за " + number2);
} else if (number1 < number2) {
    alert(number1 + " більше за " + number2)
} else{
    alert("Обидва числа рівні")
}