/**
 * Validates a given currency
 * @param {String} currency
 */

export default function isValidCurrency(currency) {
  if (typeof currency !== 'string') return false
  return /(^[^\W]?[0-9 ]+[,]?(\d)*( €| EUR)$)/gm.test(currency)
}
