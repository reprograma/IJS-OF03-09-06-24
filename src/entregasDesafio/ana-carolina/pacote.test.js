const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcularPacote", () => {
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

  test("Retorna se é um pacote premium", () => {
    const totalHoras = 101;
    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_premium");
  });

  test("Valida quando o valor total de horas é igual a 50", () => {
    const totalHoras = 50;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_basico");
  });

  test("Valida quando o valor total de horas é igual a 100", () => {
    const totalHoras = 100;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna pacote premium para 149 horas", () => {
    const totalHoras = 149;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_premium");
  });

  test("Retorna pacote premium para 199 horas", () => {
    const totalHoras = 199;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_premium");
  });

  test("Retorna pacote premium para 200 horas", () => {
    const totalHoras = 200;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_premium");
  });

  describe("calcularPacote", () => {
    test("Retorna pacote básico para 0 horas", () => {
      const totalHoras = 0;
      const result = calcularPacote(totalHoras);

      expect(result).toEqual("pacote_basico");
    });

    test("Retorna pacote premium para 200 horas", () => {
      const totalHoras = 200;
      const result = calcularPacote(totalHoras);

      expect(result).toEqual("pacote_premium");
    });
  });

  test("Retorna pacote premium para 201 horas", () => {
    const totalHoras = 201;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_premium");
  });

  test("Retorna pacote premium para -50 horas", () => {
    const totalHoras = -50;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_premium");
  });

  test("Retorna pacote intermediário para 50.5 horas", () => {
    const totalHoras = 50.5;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna pacote básico para número binário 101", () => {
    const numeroBinario = parseInt("101", 2);
    const result = calcularPacote(numeroBinario);

    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote básico para valor nulo", () => {
    const totalHoras = null;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote básico para valor vazio", () => {
    const totalHoras = "";
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote básico para valor inesperado", () => {
    const totalHoras = "reprograma";
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote básico para número binário", () => {
    const numeroBinario = 0b11011100;
    const result = calcularPacote(numeroBinario);
    
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna pacote básico para valor hexadecimal", () => {
    const totalHoras = 0xFF;
    const result = calcularPacote(totalHoras);

    expect(result).toEqual("pacote_basico");
  });

  test("Forçando o teste a passar", () => {
    const totalHoras = 49;
    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });

  test("Forçando o teste a falhar", () => {
    const totalHoras = 51;
    const result = calcularPacote(totalHoras);

    expect(result).toBe("pacote_basico");
  });
});
