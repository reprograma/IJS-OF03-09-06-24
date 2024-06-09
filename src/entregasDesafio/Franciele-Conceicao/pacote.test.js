const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")


describe("Retorna qual pacote de acordo ao número de horas", () => {
    test("Retorna um pacote básico", () => {

        const totalHoras = 49;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico")

    })

    test("retorna se é um pacote intermediario", () => {
        const totalHoras = 51
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_intermediario")
    })
    test("retorna se é um pacote premium", () => {
        const totalHoras = 101
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_premium")
    })

    test("retorna se é um pacote premium", () => {
        const totalHoras = 108
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_premium")
    })
    test("retorna se é um pacote intermediario", () => {
        const totalHoras = 60
        const result = calcularPacote(totalHoras)

        expect(result).toBe("pacote_intermediario")
    })
  
})