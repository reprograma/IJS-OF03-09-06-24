const {
    calcularPacote
} = require("../../dominio/calculadora/Projeto/pacote")

describe ("Calcula o pacote de acordo com o número de horas", () => {

    test ("Retorna se é um pacote básico", () => {
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    
    });

    test ("Retorna se é um pacote intermediário", () => {
        const totalHoras = 51;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario");
    
    });

    test ("Retorna se é um pacote premium", () => {
        const totalHoras = 101;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    
    });

    test ("Qual tipo de pacote é igual a 50", () => {
        const totalHoras = 50;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    
    });

})

