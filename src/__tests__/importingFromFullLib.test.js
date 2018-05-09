import { isValidPostalCode } from '../index'

test('importing from full lib works as expected', () => {
  expect(typeof isValidPostalCode).toBe('function')
})
