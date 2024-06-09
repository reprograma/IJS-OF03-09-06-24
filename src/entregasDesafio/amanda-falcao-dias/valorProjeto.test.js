const {
  calcularValorTotalProjeto,
} = require('../../dominio/calculadora/Projeto/valorProjeto.js');
const pacote = require('../../dominio/calculadora/Projeto/pacote.js');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('valida o valor total do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  });
  test('valida o valor total do projeto de acordo com as funcionalidades e valor/hora da pessoa desenvolvedora', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
    ];
    const valorHora = 70;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBe(3696);
  });
});
