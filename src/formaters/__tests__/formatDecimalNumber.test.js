import formatDecimalNumber from 'formaters/formatDecimalNumber'

describe('formatDecimalNumber.test.js', () => {
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
    expect(formatDecimalNumber(300.5, { showLeadingZeros: true })).toBe(
      '300,50'
    )
    expect(() => formatDecimalNumber(15, null)).toThrow(TypeError)
    expect(() => formatDecimalNumber(null)).toThrow(TypeError)
    expect(() => formatDecimalNumber(undefined)).toThrow(TypeError)
  })

  test('fix broken tests after bug fix #35', () => {
    // this broke ==>
    // expect(formatDecimalNumber(300)).toBe('300')
    // expect(formatDecimalNumber(15)).toBe('15')
    // expect(formatDecimalNumber('000000000dsfsdfsd')).toBe('000000000dsfsdfsd')

    // this uses default options {false, 2}
    // original tests, fixed
    expect(formatDecimalNumber(300)).toBe('300,00')
    expect(formatDecimalNumber(15)).toBe('15,00')
    expect(formatDecimalNumber('000000000dsfsdfsd')).toBe('NaN')

    // this uses default options {false, 2}
    expect(formatDecimalNumber(300, { decimals: 0 })).toBe('300')
    expect(formatDecimalNumber('300', { decimals: 0 })).toBe('300')
    expect(formatDecimalNumber(15, { decimals: 0 })).toBe('15')
  })

  test('bug fix #35', () => {
    const expectedResult = '1045,05'

    expect(
      formatDecimalNumber('1045.045', { showLeadingZeros: false, decimals: 2 })
    ).toBe(expectedResult)
  })
})
