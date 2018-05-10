/**
 * Validates a portuguese citizen card number
 * @param {String} citizenCardNumber
 */
export default function isValidCCNumber(citizenCardNumber) {
  if (typeof citizenCardNumber !== 'string') {
    return false
  }

  // Join and uppercase
  let trimmedAndUpper = citizenCardNumber.replace(/\s+/g, '').toUpperCase()
  if (trimmedAndUpper.length != 12) {
    return false
  }

  // Calculate the validity using CheckDigit
  let isSecondDigit = false
  let charCodes = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let checkDigitTotal = trimmedAndUpper
    .split('')
    .reverse()
    .reduce((sum, value) => {
      let code = charCodes.indexOf(value)
      code = isSecondDigit ? code * 2 : code
      code -= isSecondDigit ? (code >= 10 ? 9 : 0) : 0
      isSecondDigit = !isSecondDigit
      return sum + code
    }, 0)

  return checkDigitTotal % 10 === 0
}
