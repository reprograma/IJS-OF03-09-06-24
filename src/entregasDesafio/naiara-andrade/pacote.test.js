const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");


describe("Retorna qual o pacote de acordo com o número de horas", ()=> {
    test("Retorna se é um pacote básico", ()=> {
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é um pacote intermediario", () => {
        const totalHoras = 51;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario")
    });

    test("Retorna se é um pacote premium", () => {
        const totalHoras = 101;
        const resultado =  calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    test("Retorna se é pacote básico com valor de horas 50", () => {
        const totalHoras = 50;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é pacote intermediário com valor de horas 100", () => {
        const totalHoras = 100;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario");
    });

    test("Retorna se é pacote premium com valor de horas 200", () => {
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    // Erro: valor acima de 200 não permitido, mas não tem tratamento
    // test("Retorna de erro com valor de horas acima de 200", () => {
    //     const totalHoras = 220;
    //     const resultado = calcularPacote(totalHoras);

    //     expect(resultado).toBe("pacote_premium");
    // });

    test("Retorna se é pacote basico com valor de horas negativo", () => {
        const totalHoras = -10;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é pacote basico com valor de horas negativo", () => {
        const totalHoras = -200;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é pacote basico com valor de horas 0", () => {
        const totalHoras = 0;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    // Retorna pacote básico com valor nulo
    // test("Retorna se é pacote basico com valor de horas nulas", () => {
    //     const totalHoras = null;
    //     const resultado = calcularPacote(totalHoras);

    //     expect(resultado).toBe("pacote_basico");
    // });

    // Erro: Retorna pacote básico com valor nulo
    // test("Retorna se é pacote basico com valor de horas nulas", () => {
    //     const totalHoras = null;
    //     const resultado = calcularPacote(totalHoras);

    //     expect(resultado).toBe("pacote_intermediario");
    // });

    // Aceita campo vazio como pacote báśico, sem tratamento
    test("Retorna se é pacote basico com campo vazio", () => {
        const totalHoras = "";
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é pacote basico com campo em formato de string com o valor 50 do pacote basico", () => {
        const totalHoras = "50";
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    // Erro: não tem tratamento para string
    // test("Retorna se é pacote basico com campo em formato de string", () => {
    //     const totalHoras = "dez";
    //     const resultado = calcularPacote(totalHoras);

    //     expect(resultado).toBe("pacote_basico");
    // });


});