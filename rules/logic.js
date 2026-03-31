/**
 * Lógica agnóstica de resolução baseada em D6
 * @param {number} roll - O valor rolado no dado
 * @returns {string} - "Sucesso" ou "Falha"
 */
module.exports = {
  checkSuccess: (roll) => {
    return roll >= 6 ? "Sucesso" : "Falha";
  }
};
