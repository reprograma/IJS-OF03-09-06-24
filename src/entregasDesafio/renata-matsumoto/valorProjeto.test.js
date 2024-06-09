const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");


jest.mock("../../dominio/calculadora/Projeto/pacote.js");
describe("Retorna o valor total do Projeto ", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("Retorna o valor total do Projeto de acordo com as funcionalidades e valor hora da desenvolvedora ", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 70;
    //ação 
    const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);

    //verificação
    expect(resultado).toBe(3696);
  });

  // test("Retorna o valor total do Projeto de acordo com as funcionalidades e valor hora da desenvolvedora ", () => {
  //   //setup
  //   const funcionalidades = [
  //     "setup",
  //     "responsividade",
  //     "construcao_1_pagina",
  //     "construcao_1_pagina",
  //     "construcao_1_pagina",
  //   ];

  //   const valorHora = 70;
  //   //ação 
  //   const resultado = calcularValorTotalProjeto(funcionalidades,valorHora);

  //   //verificação
  //   expect(resultado).toBe(3763);
  // });
}); 