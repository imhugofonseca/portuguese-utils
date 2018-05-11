/**
 * Validates a given currency
 * @param {String} currency
 */

export default function isValidCurrency(currency) {
  return /(^[^\W]?[0-9 ]+[,]?(\d)*( €)$)/gm.test(currency)
}
