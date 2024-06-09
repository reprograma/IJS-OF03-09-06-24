const {
  calcularPacote,
} = require('../../dominio/calculadora/Projeto/pacote.js');

describe('retorna qual o pacote de acordo com o número de horas', () => {
  test('retorna se é um pacote básico', () => {
    const totalDeHoras = 49;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_basico');
  });

  test('retorna se é um pacote intermediario', () => {
    const totalDeHoras = 51;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_intermediario');
  });

  test('retorna se é um pacote premium', () => {
    const totalDeHoras = 101;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_premium');
  });

  test('valida retorno quando total de horas for 50', () => {
    const totalDeHoras = 50;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_basico');
  });

  test('valida retorno quando total de horas for 100', () => {
    const totalDeHoras = 100;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_intermediario');
  });

  test('valida retorno quando o total de horas for 200', () => {
    const totalDeHoras = 200;
    const resultado = calcularPacote(totalDeHoras);
    expect(resultado).toBe('pacote_premium');
  });

  test('valida erro quando o total de horas for zero', () => {
    const totalDeHoras = 0;
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser maior que 0',
    );
  });

  test('valida erro quando o total de horas for negativo', () => {
    const totalDeHoras = -1;
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser maior que 0',
    );
  });

  test('valida erro quando o total de horas for maior que 200', () => {
    const totalDeHoras = 201;
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser menor ou igual a 200',
    );
  });

  test('valida erro quando o total de horas for nulo', () => {
    const totalDeHoras = null;
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser um número e não pode ser nulo ou indefinido',
    );
  });

  test('valida erro quando o total de horas for indefinido', () => {
    const totalDeHoras = undefined;
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser um número e não pode ser nulo ou indefinido',
    );
  });

  test('valida erro quando o total de horas não for um número', () => {
    const totalDeHoras = '50';
    expect(() => calcularPacote(totalDeHoras)).toThrowError(
      'O total de horas deve ser um número e não pode ser nulo ou indefinido',
    );
  });
});
