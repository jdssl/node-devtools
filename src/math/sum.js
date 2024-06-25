/**
 * Calcula a soma dos números fornecidos.
 * @param {...number} args - Números a serem somados.
 * @returns {number} - Retorna a soma dos números.
 */
export const sum = (...args) => {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
