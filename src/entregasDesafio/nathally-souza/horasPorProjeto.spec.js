const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const {
    HORAS_POR_FUNCIONALIDADE,
} = require("../../dominio/calculadora/constantes/constantes");

describe("horas por projeto", () => {
  it("deve retornar o valor de horas do projeto de acordo com a lista de funcionalidades", () => {
    const funcionalidades = Object.keys(HORAS_POR_FUNCIONALIDADE);
    expect(calcularHorasDeProjeto(funcionalidades)).toBe(104);
  })

  it("deve retornar valor_invalido caso a lista de funcionalidades seja vazia", () => {
    expect(calcularHorasDeProjeto([])).toBe("valor_invalido");
  })

  it("deve retornar valor_invalido caso a lista de funcionalidades seja null", () => {
    expect(calcularHorasDeProjeto(null)).toBe("valor_invalido");
  })
});

