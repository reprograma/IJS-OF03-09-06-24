const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto < 0) return undefined;

  if (totalDeHorasPorProjeto === null) return null;

  const tipoPacote = Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
  );
  return tipoPacote ? tipoPacote[0] : undefined;
};
exports.calcularPacote = calcularPacote;
