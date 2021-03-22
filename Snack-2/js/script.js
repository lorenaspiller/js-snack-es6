/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// 1 step
const squadreCalcio = [
  {
    nome : "sampdoria",
    puntiFatti : 0,
    falliSubiti : 0
  },
  {
    nome : "juventus",
    puntiFatti : 0,
    falliSubiti : 0
  },
  {
    nome : "milan",
    puntiFatti : 0,
    falliSubiti : 0
  }
];

// 2 step

function randomNumber (min, max) {
  let random = Math.floor(Math.random() * max) + 1;
  return random;
}

// for (let i = 0; i < squadreCalcio.length; i++) {
//   squadreCalcio[i].puntiFatti = randomNumber (1, 12);
//   squadreCalcio[i].falliSubiti = randomNumber (1, 80);
// }



console.log(squadreCalcio);


// 3 step
// const nuovoSquadreCalcio = [];
//
// for (let i = 0; i < squadreCalcio.length; i++) {
//   const{nome, falliSubiti} = squadreCalcio[i];
//
//   let squadra = (
//     {
//       nome : nome,
//       falliSubiti: falliSubiti
//     }
//   );
//
//   nuovoSquadreCalcio.push(squadra);
// }

// 2 step uso la funzione map
const nuovoSquadreCalcio = squadreCalcio.map((squadra) => {
  squadra.puntiFatti = randomNumber (1, 12);
  squadra.falliSubiti = randomNumber (1, 80);
  // const {nome, falliSubiti} = squadra;
  return {squadra : squadra.nome, falli : squadra.falliSubiti};
});

console.log(nuovoSquadreCalcio);
