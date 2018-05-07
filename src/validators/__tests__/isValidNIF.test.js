import isValidNIF from 'validators/isValidNIF'

test('isValidNIF returns true on valid nifs', () => {
  expect(isValidNIF('275863891')).toBe(true)
  expect(isValidNIF('508444624')).toBe(true)
  expect(isValidNIF('123456789')).toBe(true)
})

test('isValidNIF returns false on valid nifs', () => {
  expect(isValidNIF(undefined)).toBe(false)
  expect(isValidNIF(123)).toBe(false)
  expect(isValidNIF(null)).toBe(false)
  expect(isValidNIF('375863891')).toBe(false)
  expect(isValidNIF('375863891')).toBe(false)
  expect(isValidNIF('123123123')).toBe(false)
})
  