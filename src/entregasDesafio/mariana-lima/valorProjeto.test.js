const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");
jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("valida valor total do pacote", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  it("shoud validate total value for features e hours of work", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 70;
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(3696);
  });
});
