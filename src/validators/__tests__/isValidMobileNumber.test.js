import isValidMobileNumber from 'validators/isValidMobileNumber'

test('isValidMobileNumber returns false in invalid numbers', () => {
    expect(isValidMobileNumber(undefined)).toBe(false)
    expect(isValidMobileNumber(null)).toBe(false)
    expect(isValidMobileNumber(9232)).toBe(false)
    expect(isValidMobileNumber('9874')).toBe(false)
    expect(isValidMobileNumber('987444345')).toBe(false)
    expect(isValidMobileNumber('977444345')).toBe(false)
})

test('isValidMobileNumber returns false in valid numbers', () => {
    expect(isValidMobileNumber('912475475')).toBe(true)
    expect(isValidMobileNumber('913789789')).toBe(true)
    expect(isValidMobileNumber('923878989')).toBe(true)
    expect(isValidMobileNumber('927878783')).toBe(true)
    expect(isValidMobileNumber('937876784')).toBe(true)
    expect(isValidMobileNumber('937878978')).toBe(true)
    expect(isValidMobileNumber('967789789')).toBe(true)
    expect(isValidMobileNumber('963487895')).toBe(true)
    expect(isValidMobileNumber('908789673')).toBe(true)
    expect(isValidMobileNumber('901234344')).toBe(true)    
})