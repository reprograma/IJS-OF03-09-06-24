const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Validar o valor total do pacote", () => {
  test("Valida valor total do projeto de acordo com as funcionalidades e valor hora da desenvolvedora", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
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

  test("Valida valor total com diferentes funcionalidades e valor hora", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    const funcionalidades = [
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const valorHora = 100;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBe(5376);
  });

  test("Valida valor total com diferentes pacotes", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
    const funcionalidades = ["setup", "construcao_1_pagina"];
    const valorHora = 130;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBe(2392);
  });

  test("Valida valor total com nenhum pacote (pacote não encontrado)", () => {
    pacote.calcularPacote.mockReturnValue(undefined);
    const funcionalidades = ["setup"];
    const valorHora = 50;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBeNaN();
  });

  test("Valida valor total com nenhuma funcionalidade", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
    const funcionalidades = [];
    const valorHora = 60;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBe(0);
  });

  test("Valida valor total com nenhuma funcionalidade", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
    const funcionalidades = [];
    const valorHora = 60;

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toBe(0);
  });
});
