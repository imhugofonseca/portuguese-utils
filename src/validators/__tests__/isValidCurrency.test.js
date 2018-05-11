import isValidCurrency from 'validators/isValidCurrency'

test('Returns false if currency is invalid', () => {
  expect(isValidCurrency(undefined)).toBe(false)
  expect(isValidCurrency(1234)).toBe(false)
  expect(isValidCurrency('1.123,50323 €')).toBe(false)
  expect(isValidCurrency('1,000,00 €')).toBe(false)
  expect(isValidCurrency('1000€')).toBe(false)
  expect(isValidCurrency('€ 100,20')).toBe(false)
  expect(isValidCurrency('+100 €')).toBe(false)
})

test('Returns false if currency is invalid', () => {
  expect(isValidCurrency('1 €')).toBe(true)
  expect(isValidCurrency('1 000 €')).toBe(true)
  expect(isValidCurrency('1 000,20 €')).toBe(true)
  expect(isValidCurrency('21 231 000,200123 €')).toBe(true)
})
