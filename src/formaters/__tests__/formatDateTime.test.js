import formatDateTime from 'formaters/formatDateTime'

test('formatDateTime returns corrected format', () => {
  expect(formatDateTime('2016-10-12')).toBe('12-10-2016 00:00:00')
  expect(formatDateTime(new Date('2016-10-12'))).toBe('12-10-2016 00:00:00')
  expect(formatDateTime(new Date('2016-10-12'), null)).toBe(
    '12-10-2016 00:00:00'
  )
  expect(formatDateTime(new Date('invalid'))).toBe('Invalid Date')
  expect(formatDateTime(null)).toBe('Invalid Date')
  expect(formatDateTime(undefined)).toBe('Invalid Date')
  expect(formatDateTime(2018)).toBe('Invalid Date')
  expect(formatDateTime('2018-05-18T10:57:22.785182+00:00')).toBe(
    '18-05-2018 10:57:22'
  )
  expect(formatDateTime('2018-05-18T10:57:22.785182+01:00')).toBe(
    '18-05-2018 09:57:22'
  )
  expect(formatDateTime('2016-10-12', `/`)).toBe('12/10/2016 00:00:00')
  expect(formatDateTime(2018, `/`)).toBe('Invalid Date')
})
