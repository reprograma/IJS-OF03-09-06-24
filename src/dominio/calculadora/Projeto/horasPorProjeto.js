const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => {
  if (!listaDeFuncionalidades || !listaDeFuncionalidades.length) return "valor_invalido";
  
  const valor = listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)

  return valor;
};

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;