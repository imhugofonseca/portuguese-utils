/**
 * Validates a portuguese citizen card number
 * @param {String} citizenCardNumber
 */
export default function isValidCCNumber(citizenCardNumber) {
  const charCodes = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (typeof citizenCardNumber !== 'string') return false
  let trimmedAndUpper = citizenCardNumber.replace(/\s+/g, '').toUpperCase()
  if (trimmedAndUpper.length != 12) return false

  let total = 0
  let secondDigit = false

  // Calculate the validity using CheckDigit
  for (let i = trimmedAndUpper.length - 1; i >= 0; i--) {
    let value = charCodes.indexOf(trimmedAndUpper[i])
    if (secondDigit) {
      value *= 2

      if (value >= 10) {
        value -= 9
      }
    }
    total += value
    secondDigit = !secondDigit
  }

  return total % 10 == 0
}
