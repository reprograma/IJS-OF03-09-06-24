const valorHoraFunction = require('../../dominio/calculadora/Hora/valorHora');
const {DIAS_UTEIS_NO_MES, HORAS_POR_DIA} = require('../../dominio/calculadora/constantes/constantes');

const valorDivisivelPorHorasTrabalhadasResultado = 1760
const valorNaoDivisivelPorHorasTrabalhadasResultado = 1680

describe('verificando se calcularValorPorHora está funcionando', () => {

    const calculoDasHorasResultadoEsperado = Math.ceil(valorDivisivelPorHorasTrabalhadasResultado / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    // esse teste é especifico para ver se quando o resultado for um número decimal a função ajusta para um inteiro (sempre jogando para cima)
    const calculoDasHorasResultadoNaoDivisivel = Math.ceil(valorNaoDivisivelPorHorasTrabalhadasResultado / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

    test('Testando funcionalidade com o resultado da divisão um número inteiro', () => {
      expect(valorHoraFunction.calcularValorPorHora(valorDivisivelPorHorasTrabalhadasResultado)).toBe(calculoDasHorasResultadoEsperado);
    });
  
    test('Testando funcionalidade com o resultado da divisão um número decimal', () => {
        expect(valorHoraFunction.calcularValorPorHora(valorNaoDivisivelPorHorasTrabalhadasResultado)).toBe(calculoDasHorasResultadoNaoDivisivel);
    });

    test('Testando passando valores nulos', () => {
        expect(valorHoraFunction.calcularValorPorHora(null)).toBe(0);
    });
});