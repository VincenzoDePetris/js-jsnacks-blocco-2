// const number = [8, 5, 6, 9, 15, 25, 2];
// let calcolo = number.reduce(number);
// console.log(calcolo);

const number = [8, 2, 3, 9, 1, 6, 2];
const dispari = number.slice(0, 1, 3, 5);

let sum = 0;

for (let i = 0; i < dispari.length; i++) {
  sum += dispari[i];
}

console.log(sum);
