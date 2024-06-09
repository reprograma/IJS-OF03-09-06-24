const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (
    totalDeHorasPorProjeto == null ||
    typeof totalDeHorasPorProjeto !== 'number'
  ) {
    throw new Error(
      'O total de horas deve ser um número e não pode ser nulo ou indefinido',
    );
  }

  if (totalDeHorasPorProjeto <= 0) {
    throw new Error('O total de horas deve ser maior que 0');
  }

  if (totalDeHorasPorProjeto > 200) {
    throw new Error('O total de horas deve ser menor ou igual a 200');
  }

  return Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto,
  )[0];
};

exports.calcularPacote = calcularPacote;
