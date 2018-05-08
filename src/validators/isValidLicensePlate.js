/**
 * Validates a portuguese license plate
 * @param {String} plateNumber 
 */


export default  function isValidLicensePlate(plateNumber) {
  // Plate number should be a string
  if (typeof plateNumber !== 'string') return false

  // Pairs separator should be an hifen '-'
  if (plateNumber[2] !== '-' && plateNumber[5] !== '-') return false

  const arrayOfPairs = plateNumber.split('-')

  // Plate number should have 3 pairs of characters
  if (arrayOfPairs.length !== 3 )  return false

  // Pairs should only have valid characters a-z A-Z 0-9
  const validateCharacters = arrayOfPairs
    .map((pair) => {
      const patt = new RegExp("[a-zA-Z0-9][a-zA-Z0-9]")
      return patt.test(pair)
    })

  // Plate should have a minimum of 1 pairs of letters
  // and maximum of two pairs of letters 
  const numberOfAlphabeticPairs = arrayOfPairs
    .reduce((acc, item) => {
      acc.push(parseInt(item, 10))
      return acc
    }, [])
    .filter(item => isNaN(item)).length

  if (validateCharacters.indexOf(false).length) return false
  if (numberOfAlphabeticPairs < 1 || numberOfAlphabeticPairs > 2) return false

  return true
}