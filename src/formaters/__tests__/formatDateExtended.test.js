import formatDateExtended from 'formaters/formatDateExtended'

test('formatDateExtended returns corrected format', () => {
  expect(formatDateExtended('2016-10-12', true)).toBe(
    'Quinta-Feira, 12 de Outubro de 2016'
  )
  expect(formatDateExtended(new Date('2016-10-12'))).toBe(
    '12 de Outubro de 2016'
  )
  expect(formatDateExtended(new Date('invalid'))).toBe('Invalid Date')
  expect(formatDateExtended(null)).toBe('Invalid Date')
  expect(formatDateExtended(undefined)).toBe('Invalid Date')
  expect(formatDateExtended(2018)).toBe('Invalid Date')
})
