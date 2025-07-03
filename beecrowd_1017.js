var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines[0]);
var velocidade = parseInt(lines[1]);

var distancia = tempo * velocidade;
var litros = distancia / 12;

console.log(litros.toFixed(3));
