/**
 * MIMIR-MTT — Logic Script
 * Sistema de Teste D6
 *
 * Este arquivo é carregado dinamicamente pelo MIMIR Engine via eval().
 * A função checkSuccess deve ser compatível tanto com eval/sandbox
 * quanto com require() em Node.js puro.
 *
 * @param {number} roll - O valor rolado no dado (inteiro positivo)
 * @returns {string} - Resultado textual da jogada ("Sucesso" ou "Falha")
 */

const checkSuccess = (roll) => {
  return roll >= 6 ? "Sucesso" : "Falha";
};

// Compatibilidade: exporta via module.exports APENAS se estivermos em Node.js real.
// Em contextos eval/sandbox, a função checkSuccess estará disponível diretamente no escopo.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { checkSuccess };
}
