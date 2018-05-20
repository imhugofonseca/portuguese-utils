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

  if (year < 1800) {
    if (year > 1699) {
      x = X + 1
      y = Y + 1
    }
  } else {
    if (year < 1900) {
      x = X + 2
      y = Y + 2
    } else if (year < 2100) {
      x = X + 2
      y = Y + 3
    } else if (year < 2200) {
      x = X + 2
      y = Y + 4
    } else {
      x = X + 3
      y = Y + 5
    }
  }

  return { x, y }
}

function calculateEaster(year, x, y) {
  const a = year % 19
  const b = year % 4
  const c = year % 7
  const d = (19 * a + x) % 30
  const e = (2 * b + 4 * c + 6 * d + y) % 7

  let day = -1
  let month = -1
  if (d + e > 9) {
    day = d + e - 9

    if (day == 26) {
      day = 19
    }

    if (day == 25 && a > 10) {
      day = 18
    }

    month = 4
  } else {
    day = d + e + 22
    month = 3
  }
  return new Date(year, month - 1, day)
}

function calculateHolyFriday(easter) {
  const newDate = new Date(easter)
  newDate.setDate(easter.getDate() - 2)
  return newDate
}

function calculateChristsBody(easter) {
  const newDate = new Date(easter)
  newDate.setDate(easter.getDate() + 60)
  return newDate
}

export function getYearEaster(year = new Date().getFullYear()) {
  const { x, y } = modifyXY(year)
  return calculateEaster(year, x, y)
}

function calculateMobileHolidays(year) {
  const easter = getYearEaster(year)
  const christsBody = calculateChristsBody(easter)
  const holyFriday = calculateHolyFriday(easter)

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
