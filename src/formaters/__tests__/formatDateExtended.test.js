import formatDateExtended from 'formaters/formatDateExtended'

test('formatDateExtended returns corrected format', () => {
  expect(formatDateExtended('2016-10-12', true)).toBe(
    'Quarta-Feira, 12 de Outubro de 2016'
  )
  expect(formatDateExtended(new Date('2016-10-12'))).toBe(
    '12 de Outubro de 2016'
  )

  expect(formatDateExtended('2016-10-15', true)).toBe(
    'Sábado, 15 de Outubro de 2016'
  )

  expect(formatDateExtended('2016-01-15', true)).toBe(
    'Sexta-Feira, 15 de Janeiro de 2016'
  )

  expect(formatDateExtended('2016-01-10', true)).toBe(
    'Domingo, 10 de Janeiro de 2016'
  )

  expect(formatDateExtended('2016-10-03', true)).toBe(
    'Segunda-Feira, 3 de Outubro de 2016'
  )

  expect(formatDateExtended(new Date('invalid'))).toBe('Invalid Date')
  expect(formatDateExtended(null)).toBe('Invalid Date')
  expect(formatDateExtended(undefined)).toBe('Invalid Date')
  expect(formatDateExtended(2018)).toBe('Invalid Date')
})
