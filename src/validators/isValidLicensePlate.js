/**
 * Validates a portuguese license plate
 * @param {String} plateNumber
 */

export default function isValidLicensePlate(plateNumber) {
  if (typeof plateNumber !== 'string') return false
  const pattern = /(?!(([a-zA-Z]{2})-([a-zA-Z]{2})-(\d{2}))|(\d{2})-([a-zA-Z]{2})-([a-zA-Z]{2})|(\d{2})-(\d{2})-(\d{2})|([a-zA-Z]{2})-([a-zA-Z]{2})-([a-zA-Z]{2}))((\d{2})|([a-zA-Z]{2}))-((\d{2})|(\w{2}))-((\d{2})|(\w{2}))/g
  return pattern.test(plateNumber)
}
