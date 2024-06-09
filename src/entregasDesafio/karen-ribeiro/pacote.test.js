const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")

describe("Retorna qual o pacote de acordo com o número de horas", () => {
    test ("Retorna se é um pacote básico", () => {
        
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test ("Retorna se é um pacote básico", () => {
        
        const totalHoras = 50;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico");
    });

    test ("Retorna se é um pacote intermediário", () => {
        
        const totalHoras = 51;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario");
    });

    test ("Retorna se é um pacote intermediário", () => {
        
        const totalHoras = 100;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_intermediario");
    });

    test ("Retorna se é um pacote premium", () => {
        
        const totalHoras = 101;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    test ("Retorna se é um pacote premium", () => {
      
        const totalHoras = 189;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    test ("Retorna se é um pacote premium", () => {
        
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    test ("verificar se há Valores nulos, vazios ou tipos inesperados", () => {

        const totalHoras = null;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe(undefined);
    })
})