var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores1 = lines[0].split(' ');
var valores2 = lines[1].split(' ');

var x1 = parseFloat(valores1[0]);
var y1 = parseFloat(valores1[1]);
var x2 = parseFloat(valores2[0]);
var y2 = parseFloat(valores2[1]);

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));
