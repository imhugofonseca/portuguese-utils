import isValidPostalCode from 'validators/isValidPostalCode'

// Test for invalid postal codes
test('isValidPostal code returns false on invalid postal codes', () => {
    expect(isValidPostalCode(undefined)).toBe(false)
    expect(isValidPostalCode(null)).toBe(false)
    expect(isValidPostalCode(true)).toBe(false)
    expect(isValidPostalCode(1345345)).toBe(false)
    expect(isValidPostalCode('32s-3444')).toBe(false)
    expect(isValidPostalCode('34444-332')).toBe(false)
    expect(isValidPostalCode('aaa')).toBe(false)
    expect(isValidPostalCode('33-333')).toBe(false)
})

// Test for valid postal codes
test('isValidPostal code returns tru on valid postal codes', () => {
    expect(isValidPostalCode('3864-122')).toBe(true)
    expect(isValidPostalCode('4500-234')).toBe(true)
    expect(isValidPostalCode('3200-345')).toBe(true)
    expect(isValidPostalCode('3254-111')).toBe(true)
    expect(isValidPostalCode('3875-434')).toBe(true)
    expect(isValidPostalCode('3845-323')).toBe(true)
})