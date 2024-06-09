const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("conjunto de testes para identificar qual é o pacote baseado nas horas", () => {

    test("retorna se é um pacote básico", () => {
        const numeroDeHoras = 49;
        const resultado = 'pacote_basico';
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })
    
    test("retorna se é um pacote intermediário", () => {
      const numeroDeHoras = 62;
      const resultado = 'pacote_intermediario';
      expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })
    
    test("retorna se é um pacote premium", () => {
        const numeroDeHoras = 195;
        const resultado = 'pacote_premium';
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })

    test("retorna se é um pacote básico com 50 horas", () => {
        const numeroDeHoras = 50;
        const resultado = 'pacote_basico';
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })

    test("retorna se é um pacote intermediário com 100 horas", () => {
        const numeroDeHoras = 100;
        const resultado = 'pacote_intermediario';
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })
    
    test("retorna se é um pacote premium com 200 horas", () => {
        const numeroDeHoras = 200;
        const resultado = 'pacote_premium';
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })
    
    test("retorna erro se o pacote tem mais de 200 horas", () => {
        const numeroDeHoras = 201;
        expect(calcularPacote(numeroDeHoras)).toBeUndefined();
    })

    test("retorna erro se o pacote tem horas negativas ou igual a zero", () => {
        const numeroDeHoras = -15;
        const resultado = "A quantidade de horas precisa serum número maior que zero.";
        //Não gosto dessa ideia de string travada, mas foi o mais fácil de pensar rápido. kkkk
        expect(calcularPacote(numeroDeHoras)).toBe(resultado);
    })

    test("retorna erro se não envio o parâmetro de horas", () => {
        const resultado = "A quantidade de horas precisa serum número maior que zero.";
        expect(calcularPacote()).toBe(resultado);
    })

    test("retorna erro se não envio o parâmetro em forma de string", () => {
        const resultado = "A quantidade de horas precisa serum número maior que zero.";
        expect(calcularPacote("testeString")).toBe(resultado);
    })

});