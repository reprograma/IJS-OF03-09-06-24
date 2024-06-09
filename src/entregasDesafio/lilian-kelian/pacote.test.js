const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", ()=> {
    test("Retorna se é um pacote básico", () => {
        const totalHoras = 49;
        const resultado = calcularPacote(totalHoras);

        expect(resultado).toBe("pacote_basico")
    });

});

test("Retorna se um pacote é intermediário", () => {
    const totalHoras = 51;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_intermediario")
});


test("Retorna se um pacote é premium", () => {
    const totalHoras = 101;
    const resultado = calcularPacote(totalHoras);

    expect(resultado).toBe("pacote_premium")
});

test("Retorna pacote básico caso o número total de horas seja exatamente igual a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual("pacote_basico");
});

test("Retorna pacote básico caso o número total de horas seja exatamente igual a 50", () => {
    const totalDeHorasPorProjeto = 100;
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual("pacote_intermediario");
});


test("Retorna pacote básico caso o número total de horas seja exatamente igual a 50", () => {
    const totalDeHorasPorProjeto = 200;
    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual("pacote_premium");
});


//Valores mínimos e máximos permitidos
//Valores fora do intervalo esperado (ex: mais de 200 ou valores negativos).
//Valores nulos, vazios ou tipos inesperados.

