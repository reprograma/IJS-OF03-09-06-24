const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("Retorna qual pacote de acordo com o número de horas", () => {
    test("Retorna se é um pacote", () => {
        //setup
        const totalHoras = 49;

        //ação
        const result = calcularPacote(totalHoras);

        //verificação
        expect(result).toBe('pacote_basico');
    })

    test("Retorna se é um pacote intermediário", () => {
            //setup
            const totalHoras = 51;
    
            //ação
            const result = calcularPacote(totalHoras);
    
            //verificação
            expect(result).toBe("pacote_intermediario");
    });

    test("retorna se é um pacote premium", () => {

        const totalHoras = 101;

        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_premium");
    })

    test("retorna qual é o pacote para a quantidade específica de 50 horas", () => {

        const totalHoras = 50;

        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_basico");
    })

    test("retorna qual é o pacote para a quantidade específica de 100 horas", () => {

        const totalHoras = 100;

        const result = calcularPacote(totalHoras);

        expect(result).toBe("pacote_intermediario");
    })

    test("retorna o pacote para até 200 horas", () => {
        for (totalHoras = 101; totalHoras <= 200; totalHoras++) {

            const result = calcularPacote(totalHoras);

            expect(result).toBe("pacote_premium");
        }
    })
});