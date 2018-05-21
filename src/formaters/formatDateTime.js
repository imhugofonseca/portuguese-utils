/**
 * Formats a date time to portuguese
 * @param {string|date} date
 * @returns string
 */
export default function formatDateTime(date, delimiter = `-`) {
  if (typeof delimiter !== 'string') {
    delimiter = `-`
  }

  if (typeof date === 'string') {
    date = new Date(date)
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid Date'
  }

  const pad = d => `${d}`.padStart(2, `0`)
  const paddedMonth = `${pad(date.getUTCMonth() + 1)}`
  const formatedDate = `${pad(
    date.getUTCDate()
  )}${delimiter}${paddedMonth}${delimiter}${date.getUTCFullYear()}`
  const formatedTime = `${pad(date.getUTCHours())}:${pad(
    date.getUTCMinutes()
  )}:${pad(date.getUTCSeconds())}`
  return `${formatedDate} ${formatedTime}`
}
