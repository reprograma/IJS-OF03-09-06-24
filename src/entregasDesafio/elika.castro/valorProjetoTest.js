const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto.js");
const pacote = require("../../dominio/calculadora/Projeto/pacote.js");
jest.mock("./pacote.js");

describe("", () => {
  beforeEach(() => pacote.calcularPacote.mockReturnValue("pacote_basico"));
});
test("", () => {
  const funcionalidades = [
    "setup",
    "responsividade",
    "construção_1_pagina",
    "construção_1_pagina",
    "construção_1_pagina",
  ];
  const valorHora = 70;
  const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

  expect(resultado).toBe(3696);
});
