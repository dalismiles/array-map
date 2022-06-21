// Esercizio 1
// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']

(function () {
  const pupilsNames = [
    "Marco",
    "Eleonora",
    "Roberta",
    "Federica",
    "Gabriele",
    "Lorena",
    "Martina",
  ];

  const pupilsNamesToIndex = pupilsNames.map(
    (element, index, array) => index + 1 + "-" + element
  );

  console.log(pupilsNamesToIndex);

  // ---------------------------------

  // Scriviamo una funzione che passata al map, converta ogni elemento al proprio indice inverso
  // es:
  // const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
  // namesToList(names) // -> [3, 2, 1, 0];

  const reversedIndex = pupilsNames.map(
    (element, index, array) => array.length - 1 - index
  );

  console.log(reversedIndex);

  // ---------------------------------

  // Esercizio 3
  // Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario
  // es:
  // const names = ['Luca', 'Gabriele'];
  // namesToList(names) // -> ['Gabriele', 'Luca'];

  const reversedNames = pupilsNames.map(
    (element, index, array) => pupilsNames[array.length - 1 - index]
  );

  console.log(reversedNames);
})();
