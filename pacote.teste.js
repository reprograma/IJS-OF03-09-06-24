const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
    // Testes de pacotes válidos
    test("Retorna se é um pacote básico", () => {
        const totalHoras = 50;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna se é um pacote intermediário", () => {
        const totalHoras = 100;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario");
    });

    test("Retorna se é um pacote premium", () => {
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    // Testes com valores fora do intervalo esperado
    test("Teste mais de 200 horas", () => {
        const totalHoras = 201;
        const resultado = calcularPacote(totalHoras);
        
        expect(resultado).toBe("erro");
    });

    test("Teste negativo", () => {
        const totalHoras = -10;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("erro");
    });

    test("Teste null", () => {
        const totalHoras = null;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("erro");
    });

    test("Teste vazio", () => {
        const totalHoras = "";
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("erro");
    });

    test("Teste com caractere não numerico", () => {
        const totalHoras = "cem";
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("erro");
    });
});
