/**
 * Validates a portuguese citizen card number
 * @param {String} citizenCardNumber
 */
export default function isValidCCNumber(citizenCardNumber) {
  if (typeof citizenCardNumber !== 'string') return false

  const trimmedAndUpper = citizenCardNumber.replace(/\s+/g, '').toUpperCase()
  if (trimmedAndUpper.length != 12) return false

  // Calculate the validity using CheckDigit
  const charCodes = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let secondDigit = false
  const total = trimmedAndUpper
    .split('')
    .reverse()
    .reduce((sum, value) => {
      let code = charCodes.indexOf(value)
      code = secondDigit ? code * 2 : code
      code -= secondDigit ? (code >= 10 ? 9 : 0) : 0
      secondDigit = !secondDigit
      return sum + code
    }, 0)

  return total % 10 === 0
}
