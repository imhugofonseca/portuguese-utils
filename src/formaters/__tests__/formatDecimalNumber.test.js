import formatDecimalNumber from 'formaters/formatDecimalNumber'

test('formatDecimalNumber should convert numbers correctly', () => {
  expect(formatDecimalNumber('15.00')).toBe('15,00')
  expect(formatDecimalNumber(15, { showLeadingZeros: true })).toBe('15,00')
  expect(
    formatDecimalNumber(15.56677, { showLeadingZeros: true, decimals: 5 })
  ).toBe('15,56677')
  expect(
    formatDecimalNumber(15.56677, { showLeadingZeros: true, decimals: 3 })
  ).toBe('15,567')
  expect(formatDecimalNumber(300, { showLeadingZeros: true })).toBe('300,00')
  expect(formatDecimalNumber(300.5, { showLeadingZeros: true })).toBe('300,50')
  expect(formatDecimalNumber(300)).toBe('300')
  expect(formatDecimalNumber(15)).toBe('15')
  expect(() => formatDecimalNumber(null)).toThrow(TypeError)
  expect(() => formatDecimalNumber(undefined)).toThrow(TypeError)
  expect(formatDecimalNumber('000000000dsfsdfsd')).toBe('000000000dsfsdfsd')
})
