const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retona qual o pacote de acordo com o número de horas", () => {
  test("Retorna se é um pacote básico", () => {
    //setup
    const totalHoras = 49;

    //ação
    const resultado = calcularPacote(totalHoras);


    //verificação
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
  })

  test("Retorna se o pacote é basico", () => {
    const totalHoras = 50;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  })

  test("Retorna se o pacote tem exatamente 50 horas, projeto básico", () => {
    const totalHoras = 50;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_basico");
  });
  test("Retorna se o pacote tem exatamente 100 horas, projeto intermediário", () => {
    const totalHoras = 100;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario");
  })
  test("Retorna se o pacote até 200 horas, projeto premium", () => {
    const totalHoras = 200;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium");
  })
})