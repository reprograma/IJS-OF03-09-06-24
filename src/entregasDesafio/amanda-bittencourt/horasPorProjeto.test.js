const {calcularHorasPorProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo da quantidade de horas por projeto",()=>{
    test("Dado um array ocm as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais",()=>{

        //setup
const funcionalidades = [

    "setup",
    "responsividade",
    "construcao_1_pagina",
    "construcao_1_pagina",
    "construcao_1_pagina",
    "formulario",
    "ssr"
]

    //acao
const result = calcularHorasPorProjeto(funcionalidades)

    //verificacao
expect(result).toEqual(72)
})
})


    