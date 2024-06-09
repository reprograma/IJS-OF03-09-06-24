const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES,
} = require("../constantes/constantes");

const calcularValorPorHora = (rendaMensal) =>
  Math.ceil(rendaMensal / (HORAS_POR_DIA * DIAS_UTEIS_NO_MES));

exports.calcularValorPorHora = calcularValorPorHora;
