let quantitat = Number(prompt("Introdueix l'import a pagar:"));

if (quantitat >= 30) {
    console.log("El cost total és de " + quantitat + "€ (transport gratis).");
} else {
    let preuTotal = quantitat + 4.95;
    console.log("El preu total és de " + preuTotal + "€ (inclou enviament).");
}