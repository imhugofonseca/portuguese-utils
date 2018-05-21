import isValidHoliday from 'validators/isValidHoliday'

test('Is a national holiday', () => {
  expect(isValidHoliday(undefined)).toBe(false)
  expect(isValidHoliday('')).toBe(false)
  expect(isValidHoliday(new Date(''))).toBe(false)
  expect(isValidHoliday(new Date(2020, 1, 21))).toBe(false)
  expect(isValidHoliday(new Date(2111, 3, 18))).toBe(false)
  expect(isValidHoliday(new Date(2211, 3, 18))).toBe(false)
  expect(isValidHoliday(new Date(2211, 3, 18))).toBe(false)
  expect(isValidHoliday(new Date(2018, 3, 1))).toBe(true)
  expect(isValidHoliday(new Date(2018, 2, 30))).toBe(true)
  expect(isValidHoliday(new Date(2018, 4, 31))).toBe(true)
  expect(isValidHoliday(new Date(2019, 3, 19))).toBe(true)
  expect(isValidHoliday(new Date(2019, 3, 21))).toBe(true)
  expect(isValidHoliday(new Date(2019, 11, 25))).toBe(true)
  expect(isValidHoliday(new Date(1755, 2, 30))).toBe(true)
  expect(isValidHoliday(new Date(1805, 3, 21))).toBe(true)
  expect(isValidHoliday(new Date(2049, 3, 18))).toBe(true)
  expect(isValidHoliday(new Date(2076, 3, 19))).toBe(true)

  expect(isValidHoliday(new Date(2018, 3, 25), true)).toBe('Dia da Liberdade')
  expect(isValidHoliday(new Date(2019, 0, 1), true)).toBe('Dia de Ano Novo')
})
