/**
 * Validates if CPE (Código Ponto de Entrega) is in the valid format
 * @param {String} cpe
 */

export default function isValidCPECUI(cpe) {
  const ABValues = 'TRWAGMYFPDXBNJZSQVHLCKE'

  // Must be a string
  if (typeof cpe !== 'string') return false

  // Validate with a pattern
  // Rules: PT(4digits)(12digits)(2Characters)
  const parsed = cpe.replace(/\s+/g, '').toUpperCase()
  const pattern = /PT(\d{16})([A-Z]{2})/g
  if (!pattern.test(parsed)) return false

  // Calculate verification characters
  // Documentation:
  // https://bit.ly/2rARRWN
  const digits = Number(parsed.replace(/[A-Z]/g, ''))
  const remainder = digits % 529
  const A = ABValues[Math.floor(remainder / 23)]
  const B = ABValues[Math.floor(remainder % 23)]

  // A and B must be in the CPE
  const lastTwoCharacters = parsed.substring(parsed.length, parsed.length - 2)
  return lastTwoCharacters === `${A}${B}`
}
