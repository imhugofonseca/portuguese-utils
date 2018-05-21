import formatDate from 'formaters/formatDate'

test('formatDate returns corrected format', () => {
  expect(formatDate('2016-10-12')).toBe('12-10-2016')
  expect(formatDate('2016-10-01')).toBe('01-10-2016')
  expect(formatDate(new Date('2016-10-12'))).toBe('12-10-2016')
  expect(formatDate(new Date('invalid'))).toBe('Invalid Date')
  expect(formatDate(null)).toBe('Invalid Date')
  expect(formatDate(undefined)).toBe('Invalid Date')
  expect(formatDate(2018)).toBe('Invalid Date')
  expect(formatDate('2018-05-18T10:57:22.785182+01:00')).toBe('18-05-2018')
  expect(formatDate('2018-05-18T10:57:22.785182+01:00')).toBe('18-05-2018')
  expect(formatDate('2016-10-12', `/`)).toBe('12/10/2016')
  expect(formatDate(2018, `/`)).toBe('Invalid Date')
})
