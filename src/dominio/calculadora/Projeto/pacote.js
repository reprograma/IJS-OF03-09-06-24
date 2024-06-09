const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  const maxHorasPermitidas = Math.max(...Object.values(MAX_HORAS_POR_PACOTE));

  if (totalDeHorasPorProjeto > maxHorasPermitidas) {
    return "Erro: horas trabalhadas excede o limite máximo permitido.";
  }

  return Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
  )[0];
};
exports.calcularPacote = calcularPacote;
