const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { HORAS_POR_FUNCIONALIDADE } = require("../../dominio/calculadora/constantes/constantes")

describe("Cálculo da quantidade de horas por projeto", () => {
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

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    const horasEsperadas =
    HORAS_POR_FUNCIONALIDADE["setup"] +
    HORAS_POR_FUNCIONALIDADE["formulario"] +
    HORAS_POR_FUNCIONALIDADE["construcao_1_pagina"] +
    HORAS_POR_FUNCIONALIDADE["construcao_1_pagina"] +
    HORAS_POR_FUNCIONALIDADE["construcao_1_pagina"] +
    HORAS_POR_FUNCIONALIDADE["ssr"] +
    HORAS_POR_FUNCIONALIDADE["responsividade"];

    expect(resultado).toBe(horasEsperadas);
  });

  test("Calcula as horas dada uma lista com funcionalidades iguais", () => {
    const listaDeFuncionalidades = [
      "responsividade",
      "responsividade",
      "responsividade",
      "responsividade",
      "responsividade",
    ];

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    const horasEsperadas =
    HORAS_POR_FUNCIONALIDADE["responsividade"] +
    HORAS_POR_FUNCIONALIDADE["responsividade"] +
    HORAS_POR_FUNCIONALIDADE["responsividade"] +
    HORAS_POR_FUNCIONALIDADE["responsividade"] +
    HORAS_POR_FUNCIONALIDADE["responsividade"];

    expect(resultado).toBe(horasEsperadas);
  });

  test("Calcula as horas quando não é passada nenhuma funcionalidade", () => {
    const listaDeFuncionalidades = [];

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultado).toBe(0);
  });

  test("Calcula as horas de apenas uma funcionalidade", () => {
    const listaDeFuncionalidades = ["setup"];

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultado).toBe(8);
  });

  test("Calcula as horas com diferentes funcionalidades", () => {
    const listaDeFuncionalidades = [
      "setup",
      "integracao_mailchimp",
      "otimizacao_seo",
    ];

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    const horasEsperadas =
    HORAS_POR_FUNCIONALIDADE["setup"] +
    HORAS_POR_FUNCIONALIDADE["integracao_mailchimp"] +
    HORAS_POR_FUNCIONALIDADE["otimizacao_seo"];

    expect(resultado).toBe(horasEsperadas);
  });

  test("Deve retornar erro ao tentar calcular uma funcionalidade que não existe", () => {
    const listaDeFuncionalidades = ["funcionalidade_falsa"];

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultado).toBeNaN();
  });
});
