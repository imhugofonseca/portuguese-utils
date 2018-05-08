import isValidLicensePlate from 'validators/isValidLicensePlate'

test('isValidLicensePlate returns false for invalid plate number', () => {
  expect(isValidLicensePlate(undefined)).toBe(false)
  expect(isValidLicensePlate(null)).toBe(false)
  expect(isValidLicensePlate(9232)).toBe(false)
  expect(isValidLicensePlate('@#-!0-NN')).toBe(false)
  expect(isValidLicensePlate('NN-NN-NN')).toBe(false)
  expect(isValidLicensePlate('00-00-00')).toBe(false)
  expect(isValidLicensePlate('00-11OO')).toBe(false)
  expect(isValidLicensePlate('N0-00-NN')).toBe(false)
})

test('isValidLicensePlate returns true if valid plate number', () => {
  expect(isValidLicensePlate('00-AA-00')).toBe(true)
  expect(isValidLicensePlate('BB-01-02')).toBe(true)
  expect(isValidLicensePlate('03-03-CC')).toBe(true)
  expect(isValidLicensePlate('NN-00-NN')).toBe(true)
  expect(isValidLicensePlate('az-10-xZ')).toBe(true)
})
