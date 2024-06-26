class Calculadora {
    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }
}

// Ejemplo de uso de la clase Calculadora
const calc = new Calculadora();
const resultadoMultiplicacao = calc.multiplicar(8, 6); // 30
console.log(resultadoMultiplicacao); // Imprime 30