var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = parseInt(input);

var horas = Math.floor(N / 3600);
N = N % 3600;
var minutos = Math.floor(N / 60);
var segundos = N % 60;

console.log(horas + ":" + minutos + ":" + segundos);
