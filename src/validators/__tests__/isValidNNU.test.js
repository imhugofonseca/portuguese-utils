import isValidNNU from 'validators/isValidNNU'

describe('isValidNNU', () => {
  test('isValidNNU returns true on valid nnu', () => {
    expect(isValidNNU('111156119')).toBe(true)
    expect(isValidNNU('234567232')).toBe(true)
    expect(isValidNNU('334589239')).toBe(true)
    expect(isValidNNU('411589233')).toBe(true)
    expect(isValidNNU('511589230')).toBe(true)
    expect(isValidNNU('611589237')).toBe(true)
    expect(isValidNNU('711589236')).toBe(true)
    expect(isValidNNU('934567895')).toBe(true)
  })

  test('isValidNNU returns false on invalid nnu', () => {
    expect(isValidNNU(undefined)).toBe(false)
    expect(isValidNNU(123)).toBe(false)
    expect(isValidNNU(null)).toBe(false)
    expect(isValidNNU('333')).toBe(false)
    expect(isValidNNU('aasdf')).toBe(false)
    expect(isValidNNU('375863891')).toBe(false)
    expect(isValidNNU('375863891')).toBe(false)
    expect(isValidNNU('123123123')).toBe(false)
  })

  test('isValidNNU returns false on invalid 1st nnu digit', () => {
    expect(isValidNNU('034567892')).toBe(false)
    expect(isValidNNU('834567892')).toBe(false)
  })
})
