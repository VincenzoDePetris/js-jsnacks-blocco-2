const number = parseInt(prompt("scrivi un numero"));

if (number % 2 == 0) {
  document.write(number);
} else {
  const dispari = number + 1;
  document.write(dispari);
}
