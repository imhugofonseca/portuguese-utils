import isValidCPE from 'validators/isValidCPE'

test('isValidCPE returns false for invalid number', () => {
  expect(isValidCPE(undefined)).toBe(false)
  expect(isValidCPE(1234)).toBe(false)
  expect(isValidCPE('PT 0014 483920194837 DA')).toBe(false)
  expect(isValidCPE('pt001448392019483da')).toBe(false)
  expect(isValidCPE('P&0014483920194837DA')).toBe(false)
})

test('isValidCPE returns true if valid number', () => {
  expect(isValidCPE('PT 0014 483920194837 DW')).toBe(true)
  expect(isValidCPE('pt0014483920194837dw')).toBe(true)
})
