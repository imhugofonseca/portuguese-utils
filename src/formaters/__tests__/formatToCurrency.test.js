import formatToCurrency from 'formaters/formatToCurrency'

test('formatToCurrency returns false for invalid types', () => {
  expect(formatToCurrency(undefined)).toBe(false)
  expect(formatToCurrency('12345')).toBe(false)
})

test('formatToCurrency returns true if valid plate number', () => {
  expect(formatToCurrency(1234)).toBe('1.234 €')
  expect(formatToCurrency(1, 2)).toBe('1,00 €')
  expect(formatToCurrency(123)).toBe('123 €')
  expect(formatToCurrency(1234, 2)).toBe('1.234,00 €')
  expect(formatToCurrency(1234.5, 1)).toBe('1.234,5 €')
  expect(formatToCurrency(1234.56, 2)).toBe('1.234,56 €')
  expect(formatToCurrency(1234.563123)).toBe('1.234 €')
  expect(formatToCurrency(1234.563123, 6)).toBe('1.234,563123 €')
  expect(formatToCurrency(1234567.9, 2)).toBe('1.234.567,90 €')
})
