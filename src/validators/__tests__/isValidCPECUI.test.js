import isValidCPECUI from 'validators/isValidCPECUI'

test('isValidCPECUI returns false for invalid number', () => {
  expect(isValidCPECUI(undefined)).toBe(false)
  expect(isValidCPECUI(1234)).toBe(false)
  expect(isValidCPECUI('PT 0014 483920194837 DA')).toBe(false)
  expect(isValidCPECUI('pt001448392019483da')).toBe(false)
  expect(isValidCPECUI('P&0014483920194837DA')).toBe(false)
})

test('isValidCPECUI returns true if valid number', () => {
  expect(isValidCPECUI('PT 0014 483920194837 DW')).toBe(true) // CPE
  expect(isValidCPECUI('pt0014483920194837dw')).toBe(true) // CPE
  expect(isValidCPECUI('PT 1234 000004614012 QQ')).toBe(true) // CUI
  expect(isValidCPECUI('pt1234000004614012qq')).toBe(true) // CUI
})
