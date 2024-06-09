const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto');

const funcionalidadesDeTest = ["setup", "ssr"];
const funcionalidadesRepetidasTest = ["setup", "setup"];
const funcionalidadesNull = [];

describe('Verificando se a função horasPorProjeto está calculando de forma correta', () => {

    const resultadoEsperado = 16

    test('Testando o calculo por função com a soma das funcionalidades', () => {
      expect(horasPorProjeto.calcularHorasDeProjeto(funcionalidadesDeTest)).toBe(resultadoEsperado);
    });

    test('Testando o calculo por função com a soma das funcionalidades repetidas', () => {
        expect(horasPorProjeto.calcularHorasDeProjeto(funcionalidadesRepetidasTest)).toBe(resultadoEsperado);
    });

    test('Testando o calculo recebendo uma lista vázia', () => {
        expect(horasPorProjeto.calcularHorasDeProjeto(funcionalidadesNull)).toBe(0);
    });
});