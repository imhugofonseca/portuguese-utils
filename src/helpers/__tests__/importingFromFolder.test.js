import { monthsExtended } from 'helpers'

test('importing from folder works as expected', () => {
  expect(Array.isArray(monthsExtended)).toBe(true)
})
