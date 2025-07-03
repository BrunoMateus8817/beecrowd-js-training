var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseFloat(input);
var centavos = Math.round(valor * 100);

console.log("NOTAS:");
let notas = [100, 50, 20, 10, 5, 2];
for (let i = 0; i < notas.length; i++) {
    let qtd = Math.floor(centavos / (notas[i] * 100));
    console.log(qtd + " nota(s) de R$ " + notas[i].toFixed(2));
    centavos = centavos % (notas[i] * 100);
}

console.log("MOEDAS:");
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
for (let i = 0; i < moedas.length; i++) {
    let qtd = Math.floor(centavos / Math.round(moedas[i] * 100));
    console.log(qtd + " moeda(s) de R$ " + moedas[i].toFixed(2));
    centavos = centavos % Math.round(moedas[i] * 100);
}
