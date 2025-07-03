var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(' ');

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);
var C = parseInt(valores[2]);

function maior(x, y) {
    return (x + y + Math.abs(x - y)) / 2;
}

var maiorAB = maior(A, B);
var maiorABC = maior(maiorAB, C);

console.log(maiorABC + " eh o maior");
