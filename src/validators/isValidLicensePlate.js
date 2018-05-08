/**
 * Validates a portuguese license plate
 * @param {String} plateNumber
 */

export default function isValidLicensePlate(plateNumber) {
  if (typeof plateNumber !== 'string') return false
  if (
    !/^([a-zA-Z0-9])\1{1}-([a-zA-Z0-9])\2{1}-([a-zA-Z0-9])\3{1}$/g.test(
      plateNumber
    )
  )
    return false
  const matches = (plateNumber.match(/([a-zA-Z])\1{1}/g) || []).length
  return matches > 0 && matches <= 2
}
