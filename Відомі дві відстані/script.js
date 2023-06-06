const kilometer = parseFloat(prompt("Відстань у кілометрах:"));
const fytu = parseFloat(prompt("Відстань у футах:"));

const meter = fytu * 0.305;

if (kilometer < meter) {
    console.log("Відстань у кілометрах менша.");
} else if (kilometer > meter) {
    console.log("Відстань у футах менша.");
} else {
    console.log("Відстані рівні.");
}
