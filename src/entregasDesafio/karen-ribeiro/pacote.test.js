const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")

describe("Retorna qual o pacote de acordo com o número de horas", () => {
    test ("Retorna se é um pacote básico", () => {
        //setup
        const totalHoras = 49;
        //ação
        const resultado = calcularPacote(totalHoras);

        //verificação
        expect(resultado).toBe("pacote_basico");
    });

    test ("Retorna se é um pacote básico", () => {
        //setup
        const totalHoras = 50;
        //ação
        const resultado = calcularPacote(totalHoras);

        //verificação
        expect(resultado).toBe("pacote_basico");
    });

    test ("Retorna se é um pacote intermediário", () => {
        //setup
        const totalHoras = 51;
        //ação
        const resultado = calcularPacote(totalHoras);

        //verificação
        expect(resultado).toBe("pacote_intermediario");
    });

    test ("Retorna se é um pacote premium", () => {
        //setup
        const totalHoras = 101;
        //ação
        const resultado = calcularPacote(totalHoras);

        //verificação
        expect(resultado).toBe("pacote_premium");
    });
})