const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo da quantidade de horas por projeto", () => {
  test("Dada uma lsita de funcionalidades, valida quanas horas por projeto", () => {
    //setup
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
});
