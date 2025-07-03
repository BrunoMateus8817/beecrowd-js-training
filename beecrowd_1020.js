var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = parseInt(input);

var anos = Math.floor(N / 365);
N = N % 365;

var meses = Math.floor(N / 30);
N = N % 30;

var dias = N;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
