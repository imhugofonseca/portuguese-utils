import isValidNISS from 'validators/isValidNISS'

describe('isValidNISS', () => {
  test('isValidNISS returns true on valid niss', () => {
    expect(isValidNISS('11115611236')).toBe(true)
    expect(isValidNISS('23456789233')).toBe(true)
    expect(isValidNISS('13456789232')).toBe(true)
  })

  test('isValidNISS returns false on invalid niss', () => {
    expect(isValidNISS(undefined)).toBe(false)
    expect(isValidNISS(123)).toBe(false)
    expect(isValidNISS(null)).toBe(false)
    expect(isValidNISS('333')).toBe(false)
    expect(isValidNISS('aasdf')).toBe(false)
    expect(isValidNISS('375863891')).toBe(false)
    expect(isValidNISS('375863891')).toBe(false)
    expect(isValidNISS('123123123')).toBe(false)
  })

  test('isValidNISS returns false on invalid 1st niss digit', () => {
    expect(isValidNISS('33456789231')).toBe(false)
    expect(isValidNISS('43456789231')).toBe(false)
    expect(isValidNISS('53456789231')).toBe(false)
    expect(isValidNISS('63456789231')).toBe(false)
    expect(isValidNISS('73456789231')).toBe(false)
    expect(isValidNISS('83456789231')).toBe(false)
    expect(isValidNISS('93456789231')).toBe(false)
  })
})
