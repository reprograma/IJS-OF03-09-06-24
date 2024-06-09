const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo de horas por projeto", () => {
  test("Dada uma lista de funcionalidades, valida quantas horas por projeto", () => {
    const listaDeFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    const result = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(result).toBe(72);
  });

  test("Forçando o teste a passar", () => {
    const listaDeFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    const resultadoEsperado = 72;
    const resultadoReal = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultadoReal).toBe(resultadoEsperado);
  });
});

describe("Forçando o teste a falhar", () => {
  test("Dada uma lista de funcionalidades, valida quantas horas por projeto", () => {
    const listaDeFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    const resultadoEsperadoFalha = 73;
    const resultadoReal = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultadoReal).toBe(resultadoEsperadoFalha);
  });
});
