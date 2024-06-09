const {calcularPacote} = require ("../../dominio/calculadora/Projeto/pacote")
const {
    calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Retorna qual é o pacote de acordo com o número de horas", () => {
    test("Retorna se é um pacote básico", () => {
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("pacote_basico");
    });

    test("Retorna de é um pacote intermediário", () =>{
        const totalHoras = 51;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("pacote_intermediario")

    });

    test("Retorna se é um pacote premium",() =>{
        const totalHoras = 101; 
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_premium");
    });

    test("Retorna se é um pacote básico com um valor máximo de horas que o pacote permite", () => {
        const totalHoras = 50;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("pacote_basico");

    });

    test("Retorna se é um pacote intermediário com um valor máximo de horas que o pacote permite", () => {
        const totalHoras = 100;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("pacote_intermediario");

    });

    test("Retorna se é um pacote premium com um valor máximo de horas que o pacote permite", () => {
        const totalHoras = 200;
        const resultado = calcularPacote(totalHoras);
        expect(resultado).toBe("pacote_premium");
    });


    test("Retorna qual o tipo do pacote de acordo com as horas calculadas a partir da funcionalidade do projeto", () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
          ];

          const totalHoras = calcularHorasDeProjeto(funcionalidades);
          const resultado = calcularPacote(totalHoras);
          expect(resultado).toBe('pacote_intermediario');
    })
});