import isValidHoliday from 'validators/isValidHoliday'

test('Is a national holiday', () => {
  expect(isValidHoliday(undefined)).toBe(false)
  expect(isValidHoliday(new Date(2018, 3, 1))).toBe(true)
  expect(isValidHoliday(new Date(2018, 2, 30))).toBe(true)
  expect(isValidHoliday(new Date(2018, 4, 31))).toBe(true)
})
