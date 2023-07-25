const nomi = [
  "Francesco",
  "Pietro",
  "Giovanni",
  "Pierpaolo",
  "Paola",
  "Ramona",
  "Giulia",
  "Angela",
];

const cognomi = [
  "Bianchi",
  "Rossi",
  "Verdi",
  "De Paolis",
  "Valeriani",
  "De Ninnolis",
  "Petroni",
  "De Champions",
];

for (let i = 0; i < nomi.length; i++) {
  const nomeRandom = Math.floor(Math.random() * nomi.length);
  const cognomeRandom = Math.floor(Math.random() * cognomi.length);
  console.log(nomi[nomeRandom] + " " + cognomi[cognomeRandom]);
}

// const cognomeRandom = Math.floor(Math.random() * cognomi.length);
// document.write(nomi[nomeRandom] + " " + cognomi[cognomeRandom]) * 8;
