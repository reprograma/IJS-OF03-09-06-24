const pacote = require('../../dominio/calculadora/Projeto/pacote');

const valorEsperadoBasico = 38
const valorEsperadoIntermediario = 88
const valorEsperadoPremium = 170

describe('Verificando se a função calcularPacote está calculando de forma correta', () => {

    const ResultadoBasico = "pacote_basico"
    const ResultadoIntermediario = "pacote_intermediario"
    const ResultadoPremium = "pacote_premium"

    test('Testando o calculo para pacote Básico', () => {
      expect(pacote.calcularPacote(valorEsperadoBasico)).toBe(ResultadoBasico);
    });

    test('Testando o calculo para pacote Intermediario', () => {
      expect(pacote.calcularPacote(valorEsperadoIntermediario)).toBe(ResultadoIntermediario);
    });

    test('Testando o calculo para pacote Premium', () => {
    expect(pacote.calcularPacote(valorEsperadoPremium)).toBe(ResultadoPremium);
    });
});

const valorExatoBasico = 50
const valorExatoIntermediario = 100
const valorExatoPremium = 200

describe('Verificando o retorno com os valores exatos', () => {

    const ResultadoBasico = "pacote_basico"
    const ResultadoIntermediario = "pacote_intermediario"
    const ResultadoPremium = "pacote_premium"

    test('Testando o calculo para pacote Básico', () => {
      expect(pacote.calcularPacote(valorExatoBasico)).toBe(ResultadoBasico);
    });

    test('Testando o calculo para pacote Intermediario', () => {
      expect(pacote.calcularPacote(valorExatoIntermediario)).toBe(ResultadoIntermediario);
    });

    test('Testando o calculo para pacote Premium', () => {
    expect(pacote.calcularPacote(valorExatoPremium)).toBe(ResultadoPremium);
    });
});