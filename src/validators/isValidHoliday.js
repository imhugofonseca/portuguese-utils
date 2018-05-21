const X = 22
const Y = 2

const HOLIDAYS = [
  { day: 1, month: 1, holiday: 'Dia de Ano Novo' },
  { day: 25, month: 4, holiday: 'Dia da Liberdade' },
  { day: 1, month: 5, holiday: 'Dia do Trabalhador' },
  { day: 10, month: 6, holiday: 'Dia de Portugal' },
  { day: 15, month: 8, holiday: 'Assunção de Nossa Senhora' },
  { day: 5, month: 10, holiday: 'Implantação da República' },
  { day: 1, month: 11, holiday: 'Dia de Todos os Santos' },
  { day: 1, month: 12, holiday: 'Restauração da Independência' },
  { day: 8, month: 12, holiday: 'Dia da Imaculada Conceição' },
  { day: 25, month: 12, holiday: 'Natal' }
]

function modifyXY(year) {
  let x
  let y
  let xOffset = 0
  let yOffset = 0

  if (year < 1800 && year > 1699) {
    xOffset = 1
    yOffset = 1
  } else if (year < 1900) {
    xOffset = 2
    yOffset = 2
  } else if (year < 2100) {
    xOffset = 2
    yOffset = 3
  } else if (year < 2200) {
    xOffset = 2
    yOffset = 4
  } else {
    xOffset = 3
    yOffset = 5
  }

  return {
    x: X + xOffset,
    y: Y + yOffset
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

export function getYearEaster(year = new Date().getFullYear()) {
  const { x, y } = modifyXY(year)
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

export default function isHoliday(date, feedback) {
  if (typeof date !== 'object') return false

  const holidays = [...HOLIDAYS, ...calculateMobileHolidays(date.getFullYear())]

  const didFindHoliday = holidays.filter(
    holiday =>
      holiday.day === date.getDate() && holiday.month === date.getMonth()
  )

  return feedback
    ? !!didFindHoliday.length && didFindHoliday[0].holiday
    : !!didFindHoliday.length
}
