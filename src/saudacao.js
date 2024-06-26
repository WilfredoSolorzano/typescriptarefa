"use strict";
class Saudador {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
        return "Olá " + this.nome;
    }
}
const saudador = new Saudador("Maria");
const resultadoSaudacao = saudador.saudacao();
console.log(resultadoSaudacao);
class SaudadorComHorario extends Saudador {
    saudacaoComHorario() {
        const horaAtual = new Date().getHours();
        let saudacaoHorario;
        if (horaAtual < 12) {
            saudacaoHorario = "Bom dia";
        }
        else if (horaAtual < 18) {
            saudacaoHorario = "Boa tarde";
        }
        else {
            saudacaoHorario = "Boa noite";
        }
        return `${saudacaoHorario}, ${this.nome}!`;
    }
}
const saudadorComHorario = new SaudadorComHorario("Carlos");
const resultadoSaudacaoComHorario = saudadorComHorario.saudacaoComHorario();
console.log(resultadoSaudacaoComHorario);
