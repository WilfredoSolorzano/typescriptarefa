class Calculadora {
    multiplicar(a: number, b: number): number {
        return a * b;
    }
}


const calc = new Calculadora();
const resultadoMultiplicacao = calc.multiplicar(8, 6); 
console.log(resultadoMultiplicacao); 