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

});