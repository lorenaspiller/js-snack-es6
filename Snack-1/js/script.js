/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

// 1. creo array di oggetti bici
const bici = [
  {
    marca : "bianchi",
    peso : 6000
  },
  {
    marca : "savadeck",
    peso : 8000
  },
  {
    marca : "pinarello",
    peso : 2000
  }
];
// console.log(bici);

// 2. setto un valore base di confronto tra le bici
let pesoMinore = bici[0];

// 3. attraverso l'array
for (let i = 0; i < bici.length; i++) {
  // 4. confronto i pesi delle bici per trovare quello minore
  if (bici[i].peso < pesoMinore.peso) {
    // 5. assegno il valore minore alla variabile iniziale
    pesoMinore = bici[i];
  }
}

const{marca, peso} = pesoMinore;
console.log(`La bici più leggera è ${marca} e pesa ${peso} gr.`);
// console.log(`La bici più leggera è ${pesoMinore.marca} e ${pesoMinore.peso}`);
