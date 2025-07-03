var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines[0].split(' ');
var item2 = lines[1].split(' ');

var qtd1 = parseInt(item1[1]);
var valor1 = parseFloat(item1[2]);

var qtd2 = parseInt(item2[1]);
var valor2 = parseFloat(item2[2]);

var total = (qtd1 * valor1) + (qtd2 * valor2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
