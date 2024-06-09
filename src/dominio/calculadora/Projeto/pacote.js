const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto <= 0) {
    return "pacote_basico";
  }

  for (const [pacote, limiteHoras] of Object.entries(MAX_HORAS_POR_PACOTE)) {
    if (totalDeHorasPorProjeto <= limiteHoras) {
      return pacote;
    }
  }

  return undefined;
};

exports.calcularPacote = calcularPacote;
