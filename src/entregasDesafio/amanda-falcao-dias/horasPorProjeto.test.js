const {
  calcularHorasDeProjeto,
} = require('../../dominio/calculadora/Projeto/horasPorProjeto.js');

describe('valida cálculo de horas por projeto', () => {
  test('dada uma lista de funcionalidades, valida quantidade de horas por projeto', () => {
    const listaDeFuncionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'formulario',
      'ssr',
    ];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultado).toBe(72);
  });
});
