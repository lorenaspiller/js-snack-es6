/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


function arrayC(array, min, max) {
  const arrayC = [];
  for (let i = 0; i < array.length; i++) {
    if ((i >= min) && (i <= max)) {
      arrayC.push(array[i])
    }

  }
  return arrayC;
}

const lista = ['blu', 'rosso', 'giallo', 'verde', 'ocra']
const array = arrayC(lista, 0, 2);

console.log(array);
