const valorProjeto = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

// a função calcularValorBaseProjeto, do mesmo arquivo, não foi exportada então não tem como testar
const funcionalidadesDeTest = ["setup", "ssr"];
const funcionalidadesRepetidasTest = ["setup", "setup"];
const valorHoraTest = 100;

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe('Verificando se a função calcularValorBaseProjeto está calculando de forma correta (pacote básico)', () => {

    const resultadoEsperadoBasico = 1760;

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    });

    test('Testando o calculo com funcionalidades distintas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesDeTest, valorHoraTest)).toBe(resultadoEsperadoBasico);
    });

    test('Testando o calculo com funcionalidades repetidas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesRepetidasTest, valorHoraTest)).toBe(resultadoEsperadoBasico);
    });

});

describe('Verificando se a função calcularValorBaseProjeto está calculando de forma correta (pacote intermediario)', () => {

    const resultadoEsperadoIntermediario = 1792;

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    });

    test('Testando o calculo com funcionalidades distintas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesDeTest, valorHoraTest)).toBe(resultadoEsperadoIntermediario);
    });

    test('Testando o calculo com funcionalidades repetidas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesRepetidasTest, valorHoraTest)).toBe(resultadoEsperadoIntermediario);
    });

});

describe('Verificando se a função calcularValorBaseProjeto está calculando de forma correta (pacote premium)', () => {

    const resultadoEsperadoPremium = 1840;

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_premium");
    });

    test('Testando o calculo com funcionalidades distintas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesDeTest, valorHoraTest)).toBe(resultadoEsperadoPremium);
    });

    test('Testando o calculo com funcionalidades repetidas', () => {
      expect(valorProjeto.calcularValorTotalProjeto(funcionalidadesRepetidasTest, valorHoraTest)).toBe(resultadoEsperadoPremium);
    });

});