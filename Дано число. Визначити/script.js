const number = parseInt(prompt("Введіть число:"));
const lastnumber = number % 10;

if (lastnumber % 2 === 0) {
    console.log("Остання цифра є парною.");
} else {
    console.log("Остання цифра є непарною.");
}

console.log("Остання цифра: " + lastnumber);
