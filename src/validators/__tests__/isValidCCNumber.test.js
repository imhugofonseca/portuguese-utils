import isValidCCNumber from 'validators/isValidCCNumber'

test('isValidCCNumber returns false in invalid card numbers', () => {
  expect(isValidCCNumber(undefined)).toBe(false)
  expect(isValidCCNumber('0521224 4zz7')).toBe(false)
  expect(isValidCCNumber('04521224 4zz1')).toBe(false)
  expect(isValidCCNumber('0521224 4zz7')).toBe(false)
})

test('isValidCCNumber returns false in valid numbers', () => {
  expect(isValidCCNumber('00000000 0 ZZ4')).toBe(true)
  expect(isValidCCNumber('000000000ZZ4')).toBe(true)
  expect(isValidCCNumber('04521224 4zz7')).toBe(true)
  expect(isValidCCNumber('04521224 4ZZ7')).toBe(true)
  expect(isValidCCNumber('045212244ZZ7')).toBe(true)
})
