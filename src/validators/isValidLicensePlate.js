/**
 * Validates a portuguese license plate
 * @param {String} plateNumber 
 */


export default  function isValidLicensePlate(plateNumber) {
  // Plate number should be a string
  if (typeof plateNumber !== 'string') return false

  // Pairs separator should be an hifen '-'
  if (plateNumber[2] !== '-' && plateNumber[5] !== '-') return false

  // Split plate number by the hyfen
  const arrayOfPairs = plateNumber.split('-')

  // Plate number should have 3 pairs of characters
  if (arrayOfPairs.length !== 3) return false

  // Pairs should only have valid characters a-z A-Z 0-9
  // Pair character should be same type
  const validateCharacters = arrayOfPairs
    .map((pair) => {
      const patt = new RegExp("[a-zA-Z0-9][a-zA-Z0-9]")
      const fistCharacterType = isNaN(parseInt(pair[0]))
      const secondCharacterType = isNaN(parseInt(pair[1]))
      if (fistCharacterType !== secondCharacterType) return false
      return patt.test(pair)
    })
  if (validateCharacters.indexOf(false) !== -1) return false

  // Plate should have a minimum of 1 pairs of letters
  // and maximum of two pairs of letters 
  const numberOfAlphabeticPairs = arrayOfPairs
    .reduce((acc, item) => {
      acc.push(parseInt(item, 10))
      return acc
    }, [])
    .filter(item => isNaN(item)).length
  if (numberOfAlphabeticPairs < 1 || numberOfAlphabeticPairs > 2) return false

  // Get alphabetic pair position 
  // output example: [true, false, false] (true = alphabetic pair)
  const alphabeticPairPosition = arrayOfPairs
    .reduce((acc, item) => {
      acc.push(isNaN(parseInt(item, 10)))
      return acc
    }, [])

  // Array with invalid positions for alphabetic pairs
  // Not allowed: AA-AA-NN, NN-AA-AA
  const positionsNotAllowed = [
    [true, true, false],
    [false, true, true]
  ]

  // Validate alphaetic pair position
  const notAllowed = positionsNotAllowed.map((item) => {
    if (item.toString() === alphabeticPairPosition.toString()) return false
  })
  if (notAllowed.indexOf(false) !== -1) return false


  return true
}