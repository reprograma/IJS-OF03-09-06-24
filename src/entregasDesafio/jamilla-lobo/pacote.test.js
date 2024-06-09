const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
  test("Retorna se é um pacote básico", () => {
    const totalHoras = 49;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });

  test("Retorna se é um pacote intermediário", () => {
    const totalHoras = 51;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 101;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 101;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Retorna se é um pacote básico", () => {
    const totalHoras = 50;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });

  test("Retorna se é um pacote intermediario", () => {
    const totalHoras = 100;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 150;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Retorna se é um pacote premmium", () => {
    const totalHoras = 200;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Retorna se não está em nenhum pacote por ser negativo", () => {
    const totalHoras = -5;

    const result = calcularPacote(totalHoras);

    expect(result).not.toBe(
      "pacote_premium" || "pacote_basico" || "pacote_intermediario"
    );
  });

  test("Retorna se é um pacote básico", () => {
    const totalHoras = 0;

    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });

  test("Retorna se não está em nenhum pacote por ser um tipo inesperado", () => {
    const totalHoras = true;

    const result = calcularPacote(totalHoras);

    expect(result).not.toBe(undefined);
  });
});
