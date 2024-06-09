const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
    if (!totalDeHorasPorProjeto || (typeof totalDeHorasPorProjeto) !== 'number' || totalDeHorasPorProjeto <= 0) {
        return "A quantidade de horas precisa serum número maior que zero."
    }
    const foundProject = Object.entries(MAX_HORAS_POR_PACOTE).find(([key, value]) => value >= totalDeHorasPorProjeto);
    return foundProject ? foundProject[0] : undefined;
}

exports.calcularPacote = calcularPacote;