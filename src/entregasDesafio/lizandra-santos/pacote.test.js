const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Retorna qual o pacote de acordo com o número de horas", () => {

    test("Retorna se é um pacote básico", () => {

        //setup

        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);
    

        expect(resultado).toBe("pacote_basico");

    });

    test("Retorna se é um pacote intermediario", () => {
        const totalHoras = 51
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_intermediario")
    })
    test("retorna se é um pacote premium", () => {
        const totalHoras = 101
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_premium")
    })

});