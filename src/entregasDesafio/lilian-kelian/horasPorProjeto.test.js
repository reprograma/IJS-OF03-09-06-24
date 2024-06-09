const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe ("Calcular as horas por projetos", () => {
  test("Dada uma lista de funcionalidades, validar as horas por projetos", () => {
    //setup
    const listaDeFuncionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
      ]
    //ação
    const result = calcularHorasDeProjeto(listaDeFuncionalidades);

    //verificação
    expect(result).toBe(72);
  });

});