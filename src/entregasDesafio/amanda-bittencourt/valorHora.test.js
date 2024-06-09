// test(condicional, () =>{
//     //setup
// a=2
// b=3
// c=4

//     //açao
//     (a+b+c)/3

//     //verificacao
    
// })

const{
    calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora")
// function calculaMedia(a, b, c){
//     let media = (a+b+c)/3
    
//     return media
// }

describe("Calcula Valor por Hora",()=>{
    test("valida calculo da media", ()=>{
        const rendaMensal = 5000;
        const result = Math.ceil(5000/(8*22));
        expect(calcularValorPorHora(rendaMensal)).toBe(result);
    })
    //setup
    //acao
    //verificacao

});

//forçar o teste a passar

test("forçar o teste a passar", ()=>{
    const rendaMensal = 5000;
    const result = 29
    expect(calcularValorPorHora(rendaMensal)).toBe(result);
})

//forçar o teste a falhar
test("forçar o teste a falhar", ()=>{
    const rendaMensal = 5000;
    const result = 29
    expect(calcularValorPorHora(rendaMensal)).toBe(result);
})

describe("Valida valores nulos e inesperados", ()=>{
    test('Retorna o valor aproximado correto dado um valor com valor double no mês', () => {

        const valorPorMes = (1750.40);
        const result = calcularValorPorHora(valorPorMes);
    
        expect(result).toEqual(10);
      });
    
      test('Espera que quando o valor recebido no mês for igual a 0, não retorne um nulo', () => {
        const valorPorMes = 0;
        const result = calcularValorPorHora(valorPorMes);
    
        expect(result).not.toBeNaN();

})
});