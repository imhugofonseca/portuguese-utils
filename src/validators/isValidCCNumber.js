/**
 * Validates a portuguese citizen card number
 * @param {String} citizenCardNumber 
 */

const getCharacterValue = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
  'G': 16,
  'H': 17,
  'I': 18,
  'J': 19,
  'K': 20,
  'L': 21,
  'M': 22,
  'N': 23,
  'O': 24,
  'P': 25,
  'Q': 26,
  'R': 27,
  'S': 28,
  'T': 29,
  'U': 30,
  'V': 31,
  'W': 32,
  'X': 33,
  'Y': 34,
  'Z': 35
}

export default function isValidCCNumber(citizenCardNumber) {
  if (typeof citizenCardNumber !== 'string') return false
  if (citizenCardNumber === undefined) return false
  let trimmedAndUpper = citizenCardNumber.replace(/\s+/g, '').toUpperCase()
  if (trimmedAndUpper.length != 12) return false

  let total = 0
  let secondDigit = false

  // Calculate the validity using CheckDigit
  // https://www.autenticacao.gov.pt/documents/10179/11463/Valida%C3%A7%C3%A3o+de+N%C3%BAmero+de+Documento+do+Cart%C3%A3o+de+Cidad%C3%A3o/0dbc446b-3718-41e5-b982-551a72f8b8a8
  for (let i = trimmedAndUpper.length - 1; i >= 0; i--) {
    let value = getCharacterValue[trimmedAndUpper[i]]

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
