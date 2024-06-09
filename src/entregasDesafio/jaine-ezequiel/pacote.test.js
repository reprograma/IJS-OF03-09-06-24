const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("retorna nome do pacote de acordo com o numero de horas", () => {

    test("retorna se é o pacote basico", () => {
        const totalHoras = 49;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico");
    })

    test("retorna se é o pacote intermediario", () => {
        const totalHoras = 51;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    })

    test("retorna se é o pacote premium", () => {
        const totalHoras = 190;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    })

    test("retorna tipo de pacote quando for 50 horas", () => {
        const totalHoras = 50;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    })

})