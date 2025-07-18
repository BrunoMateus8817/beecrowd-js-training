var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var delta = B * B - 4 * A * C;

if (delta < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    var R1 = (-B + Math.sqrt(delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}
