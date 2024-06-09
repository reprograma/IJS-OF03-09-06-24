const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("retatona qual o pacote de acordo com o número de horas", () => {
  it("should return basic package", () => {
    const totalHoras = 49;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });
  it("should return basic package", () => {
    const totalHoras = 50;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });

  it("should return intermediate package", () => {
    const totalHoras = 51;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  });

  it("should return intermediate package", () => {
    const totalHoras = 100;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  });

  it(" should return premium package", () => {
    const totalHoras = 101;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  });

  it("should return undefined when value its bigger than 200", () => {
    const totalHoras = 201;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe(undefined);
  });

  it("should return undefine when its a negative numbers", () => {
    const totalHoras = -1;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe(undefined);
  });

  it("should return null when its a null value", () => {
    const totalHoras = null;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe(null);
  });
});
