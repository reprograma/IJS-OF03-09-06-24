const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {

//valida a função

test("valida cálculo da hora por hora", () => {
  //setup
  //adiciono as informações necessárias para executar o teste
  const rendaMensal = 7000;

  //ação
  const result = Math.ceil(rendaMensal / (8*22));
  
  //verificação
  expect(calcularValorPorHora(rendaMensal)).toBe(result)
  
  })

// Forçar o teste a passar
test("forcar o teste a passar", () => {
  // //setup
// //adiciono as informações necessárias para executar o teste
const rendaMensal = 7000;

//ação
const result = 40;

//verificação
expect(calcularValorPorHora(rendaMensal)).toBe(result)

})

// Forçar o teste a falhar

// test("forcar o teste a falhar", () => {
//   // //setup
// // //adiciono as informações necessárias para executar o teste
// const rendaMensal = 7000;

// //ação
// const result = 30;

// //verificação
// expect(calcularValorPorHora(rendaMensal)).toBe(result)

// })

})




// test(condicional, () => {
// //condicional - validando calculo da média

// //setup
// //adiciono as informações necessárias para executar o teste

// //ação
// // exemplo(a + b + c) / 3

// //verificação
// //resultado esperado


// })



