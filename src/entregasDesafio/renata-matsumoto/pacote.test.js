const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
const { MAX_HORAS_POR_PACOTE } = require("../../dominio/calculadora/constantes/constantes");


describe("Retorna qual o pacote de acordo com o número de horas ", () => {
  test("Retorna se é um pacote básico", () => {
    //setup
    const totalHoras = 49;

    //ação 
    const resultado = calcularPacote(totalHoras);

    //verificação
    expect(resultado).toBe("pacote_basico");
  });

  test("Retorna se é um pacote intermediário", () => {
    //setup
    const totalHoras = 52;

    //ação 
    const resultado = calcularPacote(totalHoras);

    //verificação
    expect(resultado).toBe("pacote_intermediario");
  });

  test("Retorna se é um pacote premium", () => {
    //setup
    const totalHoras = 101;

    //ação 
    const resultado = calcularPacote(totalHoras);

    //verificação
    expect(resultado).toBe("pacote_premium");
  });

  test("Retorna qual é o pacote de acordo com o valor de horas igual a 50", () => {
    //setup
    const totalDeHorasPorProjeto = 50;

        //ação 
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual("pacote_basico");
  });

  test("Retorna qual é o pacote de acordo com o valor de horas igual a 100", () => {
    //setup
    const totalDeHorasPorProjeto = 100;

        //ação 
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual("pacote_intermediario");
  });

  test("Retorna qual é o pacote de acordo com o valor de horas até 200", () => {
    //setup
    const totalDeHorasPorProjeto = 150;

        //ação 
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual("pacote_premium");
  });

  test("Retorna qual é o pacote de acordo com o valor de horas até 200", () => {
    //setup
    const totalDeHorasPorProjeto = 150;

        //ação 
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).toEqual("pacote_premium");
  });

  test("Não aceita valores nulos", () => {
    //setup
    const totalDeHorasPorProjeto = null;

        //ação 
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    //verificação
    expect(resultado).not.toBeNull();
  });


  test("Verificar se o valor de horas recebido nãp corresponde ao valor de horas do pacote intermediário", () => {
    //setup
    const totalHoras = 41;

        //ação 
    const resultado = calcularPacote(totalHoras);

    //verificação
    expect(resultado).not.toEqual("pacote_intermediário");
  });
}); 