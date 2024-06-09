const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

exports.calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  return Math.round(
    totalDeHorasPorProjeto * valorHora * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]
  );
};
