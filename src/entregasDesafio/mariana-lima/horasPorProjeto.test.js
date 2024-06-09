const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto//horasPorProjeto");

describe("Cálculo da quantidade de horas por projeto ", () => {
  it("should validate hours per project ", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];

    const resultado = calcularHorasDeProjeto(funcionalidades);

    expect(resultado).toBe(72);
  });
});
