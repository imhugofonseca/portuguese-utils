import { FindValueOperator } from 'rxjs/operators/find'
import { Z_ASCII } from 'zlib'
import { QueueScheduler } from 'rxjs/scheduler/QueueScheduler'

/**
 * Validates if CPE (Código Ponto de Entrega) is in the valid format
 * @param {String} cpe
 */

export default function isValidCPE(cpe) {
  const ABValues = 'TRWAGMYFPDXBNJZSQVHLCKE'

  // Must be a string
  if (typeof cpe !== 'string') return false

  // Validate with a pattern
  // Rules: PT(4digits)(12digits)(2Characters)
  const parsed = cpe.replace(/\s+/g, '').toUpperCase()
  const pattern = /PT(\d{4})(\d{12})([A-Z]{2})/g
  if (!pattern.test(parsed)) return false

  // Calculate verification characters
  // Documentation:
  // http://www.erse.pt/pt/legislacao/Legislacao/Attachments/770/res2E5978000F3B442890EAA1412A11DE3E.pdf
  const digits = parseInt(parsed.replace(/[A-Z]/g, ''))
  const remainder = digits % 529
  const A = ABValues[Math.floor(remainder / 23)]
  const B = ABValues[Math.floor(remainder % 23)]

  // A and B must be in the CPE
  return parsed.indexOf(A) !== -1 && parsed.indexOf(B) !== -1 ? true : false
}
