var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(' ');

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var pi = 3.14159;

var area_triangulo = (A * C) / 2;
var area_circulo = pi * Math.pow(C, 2);
var area_trapezio = ((A + B) * C) / 2;
var area_quadrado = Math.pow(B, 2);
var area_retangulo = A * B;

console.log("TRIANGULO: " + area_triangulo.toFixed(3));
console.log("CIRCULO: " + area_circulo.toFixed(3));
console.log("TRAPEZIO: " + area_trapezio.toFixed(3));
console.log("QUADRADO: " + area_quadrado.toFixed(3));
console.log("RETANGULO: " + area_retangulo.toFixed(3));
