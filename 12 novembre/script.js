// // 21.3.-
// let taula2 = [23, 45, 98, 73]; 
// let sumaPosicions = taula2[0] + taula2[2]; 
// console.log(sumaPosicions); 

// taula2[6] = sumaPosicions; 
// console.log(taula2);


// // 21.4.-
// let numeroStr = prompt("Introdueix un número:");
// let numero = parseFloat(numeroStr);
// let resultats = [];
// resultats[0] = numero * 2;
// resultats[1] = numero * 3;
// console.log(resultats);


// // 21.5.-
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));
// let operacions = [
//   num1 + num2, 
//   num1 - num2, 
//   num1 * num2, 
//   num1 / num2
// ];
// console.log(operacions);


// // 21.6.-
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

// console.log(taula[0]); 
// console.log(taula[taula.length - 1]); 


// // 21.7.-
// for (let i = 0; i < taula.length; i++) {
//   console.log(taula[i]);
// }


// // 21.8.-
// let sumaTotal = 0;
// for (let i = 0; i < taula.length; i++) {
//   sumaTotal += taula[i];
// }
// console.log("Suma:", sumaTotal);
// console.log("Mitjana:", sumaTotal / taula.length);


// // 21.9.-
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let taulaSumada = []; 
// for (let i = 0; i < taula.length; i++) {
//   taulaSumada[i] = taula[i] + 25; 
// }
// console.log(taulaSumada);


// // 21.10.-
// let sumaTotal = 0;
// for (let i = 0; i < taula.length; i++) {
//   sumaTotal += taula[i];
// }
// console.log("Suma:", sumaTotal);
// console.log("Mitjana:", sumaTotal / taula.length);

// // 21.11.-
// let max = taula[0];
// let min = taula[0];
// for (let i = 1; i < taula.length; i++) {
//   if (taula[i] > max) max = taula[i];
//   if (taula[i] < min) min = taula[i];
// }
// console.log("Màxim:", max, "Mínim:", min);


// // 21.12.-
// let taulaParells = [];
// let indexParells = 0;
// for (let i = 0; i < taula.length; i++) {
//   if (taula[i] % 2 === 0) {
//     taulaParells[indexParells] = taula[i];
//     indexParells++;
//   }
// }
// console.log(taulaParells);


// // 21.13.- 
// let valorBuscat = parseFloat(prompt("Quin valor vols comptar?"));
// let comptador = 0;

// for (let i = 0; i < taula.length; i++) {
//   if (taula[i] === valorBuscat) {
//     comptador++; 
//   }
// }
// console.log("El valor apareix", comptador, "vegades.");


// // 21.14.- 
// let array1 = [1, 2, 3];
// let array2 = [2, 3, 4];

// if (array1.length === array2.length) {
//   let arraySuma = [];
//   for (let i = 0; i < array1.length; i++) {
//     arraySuma[i] = array1[i] + array2[i]; 
//   }
//   console.log(arraySuma); 
// }


// // 21.15.- 
// let taulaOriginal = [1, 2, 3, 4, 5];
// let taulaInvertida = [];

// for (let i = 0; i < taulaOriginal.length; i++) {
  
//   taulaInvertida[i] = taulaOriginal[taulaOriginal.length - 1 - i]; 
// }
// console.log(taulaInvertida); 
