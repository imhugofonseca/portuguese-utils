import isValidCCNumber from 'validators/isValidCCNumber'

test('isValidCCNumber returns false in invalid card numbers', () => {
  expect(isValidCCNumber(null)).toBe(false)
  expect(isValidCCNumber('')).toBe(false)
  expect(isValidCCNumber(undefined)).toBe(false)
  expect(isValidCCNumber('0521224 4zz7')).toBe(false)
  expect(isValidCCNumber('04521224 4zz1')).toBe(false)
  expect(isValidCCNumber('0521224 4zz7')).toBe(false)
})

test('isValidCCNumber returns true in valid numbers', () => {
  expect(isValidCCNumber('15124873 7 ZZ4')).toBe(true)
  expect(isValidCCNumber('000000000ZZ4')).toBe(true)
  expect(isValidCCNumber('04521224 4zz7')).toBe(true)
  expect(isValidCCNumber('04521224 4ZZ7')).toBe(true)
  expect(isValidCCNumber('045212244ZZ7')).toBe(true)
})
