import formatToCurrency from 'formaters/formatToCurrency'

test('formatToCurrency throws an error for invalid types', () => {
  expect(() => formatToCurrency(undefined)).toThrow(TypeError)
  expect(() => formatToCurrency({})).toThrow(TypeError)
})

test('formatToCurrency throws an error for invalid string parse', () => {
  expect(() => formatToCurrency('asdasdasd')).toThrow(Error)
})

test('formatToCurrency should return formatted number as currency string', () => {
  expect(formatToCurrency(1234)).toBe('1 234 €')
  expect(formatToCurrency(1, 2)).toBe('1,00 €')
  expect(formatToCurrency(1, 2, true)).toBe('1,00 EUR')
  expect(formatToCurrency(123)).toBe('123 €')
  expect(formatToCurrency(1234, 2)).toBe('1 234,00 €')
  expect(formatToCurrency(1234.5, 1)).toBe('1 234,5 €')
  expect(formatToCurrency(1234.56, 2, true)).toBe('1 234,56 EUR')
  expect(formatToCurrency(1234.563123)).toBe('1 234 €')
  expect(formatToCurrency(1234.563123, 6)).toBe('1 234,563123 €')
  expect(formatToCurrency(1234567.9, 2)).toBe('1 234 567,90 €')
  expect(formatToCurrency('12345')).toBe('12 345 €')
  expect(formatToCurrency('123,45', 2)).toBe('123,45 €')
  expect(formatToCurrency('123,45')).toBe('123 €')
})
