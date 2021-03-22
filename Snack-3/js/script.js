/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


// function arrayC(array, min, max) {
//   const arrayC = [];
//   for (let i = 0; i < array.length; i++) {
//     if ((i >= min) && (i <= max)) {
//       arrayC.push(array[i])
//     }
//
//   }
//   return arrayC;
// }
//
// const array = arrayC(lista, 0, 2);



const lista = ['blu', 'rosso', 'giallo', 'verde', 'ocra'];

let min = 0;
let max = 2;

// funzione con filter
function filterArray(array, min, max) {
  return lista.filter( (element, index) => index >= min && index <= max );
}

const arrayC = filterArray(lista, 0, 2);

//// for each
// let nuovoArray = [];
//
// lista.forEach((element, index) =>{
//   if ((index >= min) && (index <= max)) {
//     nuovoArray.push(element);
//   }
// });
//
// console.log(nuovoArray);



// filter
// let arrayC = lista.filter( (element, index) => index >= min && index <= max );


console.log(arrayC);
