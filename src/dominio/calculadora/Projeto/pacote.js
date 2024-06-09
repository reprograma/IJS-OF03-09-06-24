const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if(totalDeHorasPorProjeto < 1 || !totalDeHorasPorProjeto) return 'Informe um valor válido'
  
  const tipo = Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([_key, value]) => value >= totalDeHorasPorProjeto
  )

  if(!tipo) return 'pacote_premium'

  return tipo[0]
}

exports.calcularPacote = calcularPacote;