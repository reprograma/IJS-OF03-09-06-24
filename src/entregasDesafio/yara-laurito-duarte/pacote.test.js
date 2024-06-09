const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
  test("Retorna se é um pacote básico", () => {
    const totalHoras = 49;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });

  test("Retorna se é um pacote intermediário", () => {
    const totalHoras = 51;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premium", () => {
    const totalHoras = 101;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  });

  test("Retorna se é um pacote básico", () => {
    const totalHoras = 50;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });

  test("Retorna se é um pacote básico", () => {
    const totalHoras = 100;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  });

  test("deve retornar undefined para horas acima do limite de qualquer pacote", () => {
    const totalHoras = 199;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  });

  test("deve retornar undefined para horas acima do limite de qualquer pacote", () => {
    const totalHoras = 200;

    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  });
});
