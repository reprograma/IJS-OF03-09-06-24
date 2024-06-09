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

    test ("Teste para pacotes exatamente iguais a 50h", () => {
        const totalHoras = 50;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico");
    
    });

    test ("Teste para pacotes exatamente iguais a 100h", () => {
        const totalHoras = 100;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    
    });

    test ("Teste para pacotes exatamente até 200h", () => {
        const totalHoras = 199;
        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    
    });

    test("Testa valores mínimos permitidos", () => {
        const totalHoras = 0;
        const resultado = calcularPacote(totalHoras);
    
        expect(resultado).toBe("pacote_basico");
    });
    
    test("Testa valores máximos permitidos", () => {
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras);
    
        expect(resultado).toBe("pacote_premium");
    });

    test("Testa valores fora do intervalo esperado (mais de 200h)", () => {
        const totalHoras = 201;
        const resultado = calcularPacote(totalHoras);
    
        expect(resultado).toBeUndefined();
    });

})

