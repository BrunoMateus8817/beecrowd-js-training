var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0]; // Não utilizado no cálculo
var salarioFixo = parseFloat(lines[1]);
var totalVendas = parseFloat(lines[2]);

var total = salarioFixo + (totalVendas * 0.15);

console.log("TOTAL = R$ " + total.toFixed(2));
