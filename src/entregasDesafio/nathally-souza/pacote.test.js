const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
const {
  MAX_HORAS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes");

describe("pacote", () => {
  it("até 20h, deve retornar o tipo pacote_basico", () => {
    expect(calcularPacote(50)).toBe("pacote_basico");
  });

  it("entre 51h e 100h, deve retornar o tipo pacote_intermediario", () => {
    expect(calcularPacote(80)).toBe("pacote_intermediario");
  });

  it("entre 101h e 200h, deve retornar o tipo pacote_premium", () => {
    expect(calcularPacote(120)).toBe("pacote_premium");
  });

  it("acima de 200h, deve retornar o tipo pacote_premium", () => {
    expect(calcularPacote(300)).toBe("pacote_premium");
  });

  it("deve retornar erro caso o valor seja 0", () => {
    expect(calcularPacote(0)).toBe("Informe um valor válido");
  })
});
