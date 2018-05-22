import 'core-js/modules/es6.array.find'
import HOLIDAYS from '../helpers/holidays'

/**
 * The following calculations are based on the Gauss formula
 *
 */

/**
 * calculate the X value for the easter formula
 * @param {number} year
 */
function calculateXOffset(year) {
  let x = 24

  if (year < 1700) x -= 2
  if (year >= 1700 && year < 1800) x -= 1
  if (year >= 2200) x += 1

  return x
}

/**
 * calculate the Y value for the easter formula.
 * @param {number} year
 */
function calculateYOffset(year) {
  let y = 2
  const firstDigits = parseInt((year / 100).toString().substring(0, 2))

  if (year > 1899 && year < 2100) {
    return (y += 3)
  }

  const diff = firstDigits - 16
  return (y += diff)
}

function calculateXY(year) {
  return {
    x: calculateXOffset(year),
    y: calculateYOffset(year)
  }
}

function calculateEaster(year, x, y) {
  const a = year % 19
  const b = year % 4
  const c = year % 7
  const d = (19 * a + x) % 30
  const e = (2 * b + 4 * c + 6 * d + y) % 7

  const dayOffset = d + e > 9 ? -9 : 22
  const monthOffset = d + e > 9 ? 1 : 0
  let day = d + e + dayOffset
  let month = 3 + monthOffset

  // 2 exceptions occur to these calculations
  if (month == 4 && day == 26) {
    day = 19
  }

  if (month == 4 && day == 25 && d == 28 && a > 10) {
    day = 18
  }

  return new Date(year, month - 1, day)
}

function calculateHolidayFromEaster(easter, daysFromEaster) {
  const newDate = new Date(easter)
  newDate.setDate(easter.getDate() + daysFromEaster)

  return newDate
}

function getYearEaster(year) {
  const { x, y } = calculateXY(year)
  return calculateEaster(year, x, y)
}

function calculateMobileHolidays(year) {
  const easter = getYearEaster(year)
  const christsBody = calculateHolidayFromEaster(easter, 60)
  const holyFriday = calculateHolidayFromEaster(easter, -2)

  return [
    {
      day: easter.getDate(),
      month: easter.getMonth(),
      holiday: 'Páscoa'
    },
    {
      day: christsBody.getDate(),
      month: christsBody.getMonth(),
      holiday: 'Corpo de Deus'
    },
    {
      day: holyFriday.getDate(),
      month: holyFriday.getMonth(),
      holiday: 'Sexta-feira Santa'
    }
  ]
}

function checkDateValidity(date) {
  const isDate =
    date && Object.prototype.toString.call(date) === '[object Date]'
  if (!isDate) {
    return isDate
  } else if (isNaN(date.getTime())) {
    return false
  }

  return true
}

/**
 *
 * @param {Date} date
 * @param {Boolean} showHoliday
 */
export default function isHoliday(date, showHoliday) {
  if (!checkDateValidity(date)) return false

  const holidays = [...HOLIDAYS, ...calculateMobileHolidays(date.getFullYear())]

  const found = holidays.find(
    holiday =>
      holiday.day === date.getDate() && holiday.month === date.getMonth()
  )

  return showHoliday ? !!found && found.holiday : !!found
}
