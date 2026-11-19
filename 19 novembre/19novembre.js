// // Exercici 3.1
// function parellOImparell(nomre) {
//   if (nomre % 2 === 0) {
//     return "parell";
//   } else {
//     return "imparell";
//   }

// }
// let resultat = parellOImparell(5);
// console.log(resultat);

// Exercici 3.2
function esdetraspas(any) {
  if (any % 400 === 0) {
    return "l'any és de traspàs";
  }
  else if (any % 100 === 0) {
    return "l'any no és de traspàs";
  }
    else if (any % 4 === 0) {
      return "l'any és de traspàs";
    }
    else {
      return "l'any no és de traspàs";
    }
}
let resultat = esdetraspas(2020);
console.log(resultat);