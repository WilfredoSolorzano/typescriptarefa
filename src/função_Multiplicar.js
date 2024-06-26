"use strict";
class Calculadora {
    multiplicar(a, b) {
        return a * b;
    }
}
const calc = new Calculadora();
const resultadoMultiplicacao = calc.multiplicar(8, 6);
console.log(resultadoMultiplicacao);
