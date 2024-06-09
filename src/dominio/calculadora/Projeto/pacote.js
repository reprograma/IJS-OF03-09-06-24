const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];

// fica como sugestão, mas para não gerar um erro na hora que passa um valor superior a 200 ou negativo, sugiro essa abordagem
// if (pacote) {
 // return pacote[0];
//} else {
//  return 'Nenhum pacote disponível';
//}
//adicionar um if e else

exports.calcularPacote = calcularPacote;
