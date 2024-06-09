const {calcularHorasDeProjeto, } = require("../../dominio/calculadora/Projeto/HorasPorProjeto");

describe("Cálculo da quantidade de horas por projeto", () => {
    test("Dada uma lista de funcionalidades, valida quantas horaspor projeto", () => {

        
        const listaDeFuncionalidades = [
            'setup',
      
            'responsividade',
      
            'construcao_1_pagina',
      
            'construcao_1_pagina',
      
            'construcao_1_pagina',
      
            'formulario',
      
            'ssr',      
          ]

        
        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        
        expect(resultado).toBe(72);
        
    });
});