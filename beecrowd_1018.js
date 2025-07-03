var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = parseInt(input);

console.log(N);

var notas = [100, 50, 20, 10, 5, 2, 1];

for (var i = 0; i < notas.length; i++) {
    var qtd = Math.floor(N / notas[i]);
    console.log(qtd + " nota(s) de R$ " + notas[i] + ",00");
    N = N % notas[i];
}
