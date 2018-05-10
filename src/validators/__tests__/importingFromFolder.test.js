import { isValidPostalCode } from 'validators'

test('importing from folder works as expected', () => {
  expect(typeof isValidPostalCode).toBe('function')
})
