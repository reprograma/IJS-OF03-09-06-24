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

  test("Valida quando o valor total de horas é igual a 50", () => {
    const totalHoras = 50;
    const result = calcularPacote(totalHoras);
  
   expect(result).toEqual("pacote_intermediario");
  });
  
  
  test("Valida quando o valor total de horas é igual a 100", () => {
    const totalHoras = 100;
    const result = calcularPacote(totalHoras);
  
   expect(result).toEqual("pacote_premium");
  });
  
  
});
