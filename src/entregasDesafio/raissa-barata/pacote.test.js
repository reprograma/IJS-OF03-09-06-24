const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe("Retorna qual pacote de acordo com o número de horas", () => {

    test("Retorna se é pacote básico", ()=> {
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_basico")
    });

    test("Retorna se é pacote intermediário", ()=> {
        const totalHoras = 51;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_intermediario")
    });

    test("Retorna se é pacote premium", ()=> {
        const totalHoras = 101;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_premium")
    });

    test("Retorna qual pacote quando o valor de horas for 50", () => {
        const totalHoras = 50;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_basico")
    });

    test("Retorna qual pacote quando o valor de horas for 100", () => {
        const totalHoras = 100;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_intermediario")
    });

    test("Retorna qual pacote quando o valor de horas for 200", () => {
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras)

        expect(resultado).toBe("pacote_premium")
    });

})