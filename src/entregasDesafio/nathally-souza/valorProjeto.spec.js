const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const {
  HORAS_POR_FUNCIONALIDADE,
} = require("../../dominio/calculadora/constantes/constantes");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("calcularValorTotalProjeto", () => {
  beforeEach(() => pacote.calcularPacote.mockReturnValue("pacote_basico"));
  it("Deve retornar o valor total do projeto", () => {
    const valorHora = 100;
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina"
    ];
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(3520);
  });

  it("Deve retornar erro caso o valor hora seja null", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina"
    ];
    expect(calcularValorTotalProjeto(funcionalidades, null)).toBe("valor_invalido");
  });

  it("Deve retornar erro caso a lista de funcionalidades seja null", () => {
    expect(calcularValorTotalProjeto(null, 100)).toBe("valor_invalido");
  });
});
