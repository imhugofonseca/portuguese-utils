import monthsExtended from 'helpers/monthsExtended'
import weekDays from 'helpers/weekDays'

/**
 * Formats a date to portuguese extended
 * @param {string|date} date
 * @returns string
 */
export default function formatDateExtended(date, includeWeekDay = false) {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid Date'
  }

  let weekDay = ``
  if (includeWeekDay) {
    const wd = date.getUTCDay()
    const wdIndex = !wd ? weekDays.length - 1 : wd - 1
    weekDay = `${weekDays[wdIndex]}, `
  }

  return `${weekDay}${date.getUTCDate()} de ${
    monthsExtended[date.getUTCMonth()]
  } de ${date.getUTCFullYear()}`
}
